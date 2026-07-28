# Google Sheets Integration Guide

This guide explains how to connect your Next.js booking form with a Google Sheet, allowing session booking details to sync automatically into a spreadsheet using a simple custom Google Apps Script.

---

## Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Add the following headers in the first row:
   - **Column A**: Date Submitted
   - **Column B**: Name
   - **Column C**: Email
   - **Column D**: Phone
   - **Column E**: Focus Area / Service
   - **Column F**: Format (Online/Offline)
   - **Column G**: Session Date
   - **Column H**: Session Time
   - **Column I**: Healing Goals / Notes

---

## Step 2: Add Google Apps Script
1. In the Google Sheets menu, click **Extensions** > **Apps Script**.
2. Delete any default code in the editor and paste the following script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Append a new row with the booking details
    sheet.appendRow([
      new Date(), 
      data.name, 
      data.email, 
      data.phone, 
      data.service, 
      data.format, 
      data.date, 
      data.time, 
      data.goals
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  }
}

// Enable CORS Preflight requests
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
```

3. Click the **Save** icon (diskette) at the top of the editor.

---

## Step 3: Deploy the Script as a Web App
1. Click the **Deploy** button > **New deployment** (top right).
2. Click the gear icon (**Select type**) next to Configuration and choose **Web app**.
3. Fill in the details:
   - **Description**: Mind'in Session Sync
   - **Execute as**: Me (your-email@gmail.com)
   - **Who has access**: Anyone
4. Click **Deploy**.
5. Google will ask you to authorize access to your spreadsheet. Click **Authorize access**, choose your account, click **Advanced** > **Go to Untitled project (unsafe)**, and click **Allow**.
6. Once deployed, copy the **Web app URL** (it ends in `/exec`).

---

## Step 4: Configure the Webhook in Next.js
Open your `.env.local` file and paste the copied URL:

```bash
NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Your booking form is now fully integrated! Any successfully submitted bookings will appear instantly inside your Google Sheet.
