no_breadcrumb:true

# Sync Contacts

## Benefits

Syncing contacts between HubSpot and the RingCentral browser extension provides a number of benefits:

* Inbound Caller Name appears in RingCentral extension Contacts list
* Caller Name appears in RingCentral extension Call History

In the RingCentral Contacts Lists, a "HubSpot" filter will appear and contacts will have a HubSpot icon next to them.

<center><img src="../img/screenshots/hubspot_extension_contacts-list.png" style="width:50%"/></center>

!!! note "Syncing Large Numbers of Contacts"
    Large numbers of contact scan take up to 30 minute sfor an initial sync. While your extensison is syncing, do not leave the page. If you do, you may have a partial sync and not all HubSpot users may appear in your RingCentral extension.

## Syncing Contacts

Contacts are synced 3 ways in the HubSpot exension:

1. initial sync
2. automatic sync
3. manual sync

### Initial Sync

The initial sync happens when the extension is first authorized to access HubSpot data.

To do this, go to the "More Menu" and click "Settings".

<center><img src="../img/screenshots/hubspot_extension_more-menu.png" style="width:50%"/></center>

Then find HubSpot and click "Authorize".

<center><img src="../img/screenshots/hubspot_extension_settings-authorize.png" style="width:50%"/></center>

You will ssee the "Authorize" button change to "Syncing' and then, when finished, change to "Unauthorize:

<center><img src="../img/screenshots/hubspot_extension_settings-syncing_sm.png" style="width:50%"/></center>

### Automatic and Manual Sync

Once your account is linked, the HubSpot extension will sync ever 20 minutes by default. You can lower this to every 5 minutes.

To view this setting and perform manual sync, go to the contacts list.

<center><img src="../img/screenshots/hubspot_extension_contacts.png" style="width:50%"/></center>

Then click the Refresh / Sync icon:

<center><img src="../img/screenshots/hubspot_extension_refresh.png" style="width:50%"/></center>

Clicking the sync icon will bering up to speed on how this integration workss and could be uesd to build another integratiions.

<center><img src="../img/screenshots/hubspot_extension_sync-dialog.png" style="width:100%"/></center>

#### Manual Sync Duration

When syncing contacts, it is important to stay on the page until the sync concludes. For a full sync of a large number of contacts, this could take 10 minutes.

When manually syncing, the following modal dialog will appear.

<center><img src="../img/screenshots/hubspot_extension_stay-on-page.png" style="width:100%"/></center>

Affter you close the dialog, tthe following message will appear in the lower left corner of thee browser until the sync is complete.

<center><img src="../img/screenshots/hubspot_extension_stay-on-page_reminder.png" style="width:100%"/></center>


