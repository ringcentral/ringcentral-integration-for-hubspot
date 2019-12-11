require('dotenv').config()
const webpack = require('webpack')
const sysConfigDefault = require('./config.default')
const os = require('os')
const { identity } = require('lodash')
const HappyPack = require('happypack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const pack = require('./package.json')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { env } = process
const packThreadCount = env.packThreadCount
  ? parseInt(env.packThreadCount)
  : os.cpus().length
const devPort = env.devPort || 6066
const host = env.host || 'localhost'
const happyThreadPool = packThreadCount === 0
  ? null
  : HappyPack.ThreadPool({ size: packThreadCount })

const happyConf = {
  loaders: ['babel-loader'],
  threadPool: happyThreadPool,
  verbose: true
}
const { version } = pack
const isProd = env.NODE_ENV === 'production'
const extractTextPlugin1 = new MiniCssExtractPlugin({
  filename: 'css/[name].styles.css'
})

const {
  clientID,
  appServer,
  clientSecret
} = sysConfigDefault.ringCentralConfigs
const {
  serviceName
} = sysConfigDefault.thirdPartyConfigs

let appConfigQuery = ''
if (clientID || appServer) {
  appConfigQuery = `?prefix=${serviceName}-rc&newAdapterUI=1&userAgent=${serviceName}_extension%2F${pack.version}&disableActiveCallControl=false&appKey=${clientID}&appSecret=${clientSecret}&appServer=${encodeURIComponent(appServer)}`
}
const pug = {
  loader: 'pug-html-loader',
  options: {
    data: {
      version,
      appConfigQuery,
      _global: {
        version,
        appConfigQuery
      }
    }
  }
}
const stylusSettingPlugin = new webpack.LoaderOptionsPlugin({
  test: /\.styl$/,
  stylus: {
    preferPathResolver: 'webpack'
  },
  'resolve url': false
})

var config = {
  mode: 'development',
  entry: {
    index: './src/app/index.js',
    app: './src/app/app.pug',
    redirect: './src/redirect/redirect.pug',
    'redirect-js': './src/redirect/redirect.js'
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[name].js',
    libraryTarget: 'var'
  },
  externals: {
  },
  watch: true,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.json']
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, 'src/app'),
      path.join(process.cwd(), 'node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [packThreadCount === 0 ? 'babel-loader?cacheDirectory' : 'happypack/loader?cacheDirectory']
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ['url-loader?limit=19999999&name=images/[name].[ext]']
      },
      {
        test: /app\.pug$/,
        use: [
          'file-loader?name=index.html',
          'concat-loader',
          'extract-loader',
          'html-loader',
          pug
        ]
      },
      {
        test: /redirect\.pug$/,
        use: [
          'file-loader?name=redirect.html',
          'concat-loader',
          'extract-loader',
          'html-loader',
          pug
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    stylusSettingPlugin,
    packThreadCount === 0 ? null : new HappyPack(happyConf),
    extractTextPlugin1
  ].filter(identity),
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    contentBase: path.join(__dirname, 'docs/'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    host,
    disableHostCheck: true,
    port: devPort
    // before: (app) => {
    //   app.use('/node_modules', express.static(
    //     path.resolve(__dirname, './node_modules'), { maxAge: '170d' })
    //   )
    // }
  }
}

if (isProd) {
  config.plugins = [
    packThreadCount === 0 ? null : new HappyPack(happyConf),
    extractTextPlugin1,
    stylusSettingPlugin,
    new webpack.DefinePlugin({
      'process.env.ringCentralConfigs': JSON.stringify(sysConfigDefault.ringCentralConfigs),
      'process.env.thirdPartyConfigs': JSON.stringify(sysConfigDefault.thirdPartyConfigs),
      'process.env.version': JSON.stringify(pack.version)
    })
  ]
  config.optimization = {
    minimize: true
  }
  config.mode = 'production'
  delete config.watch
  delete config.devtool
  delete config.devServer
}

module.exports = config
