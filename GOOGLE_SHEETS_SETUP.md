# Google Sheets Integration Guide

This guide explains how to connect your Next.js booking form with a Google Sheet, allowing session booking details to sync automatically into a spreadsheet using a simple custom Google Apps Script.

---

## Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Note your spreadsheet's ID from the URL (the long string of letters and numbers).
3. The script will automatically add headers when the first booking is submitted.

---

## Step 2: Add Google Apps Script
1. In the Google Sheets menu, click **Extensions** > **Apps Script**.
2. Delete any default code in the editor and paste the following script:

```javascript
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE";
const SHEET_NAME = "Sheet1";

const HEADERS = [
  "Submitted At",
  "Name",
  "Email",
  "Phone",
  "Service",
  "Format",
  "Date",
  "Time",
  "Goals"
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  let hasLock = false;

  try {
    lock.waitLock(10000);
    hasLock = true;

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    ensureHeaders(sheet);

    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("Missing POST body");
    }

    // Read POST body
    const data = JSON.parse(e.postData.contents);

    if (isDuplicateBooking(sheet, data)) {
      return jsonResponse({
        status: "duplicate",
        message: "Booking already exists"
      });
    }

    const row = [
      data.submitted_at || new Date(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.service || "",
      data.format || "",
      data.date || "",
      data.time || "",
      data.goals || ""
    ];

    // Save data
    sheet.appendRow(row);

    return jsonResponse({
      status: "success",
      message: "Booking saved successfully"
    });

  } catch (error) {
    return jsonResponse({
      status: "error",
      message: error.toString()
    });

  } finally {
    if (hasLock) {
      lock.releaseLock();
    }
  }
}

function ensureHeaders(sheet) {
  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  const currentHeaders = headerRange.getValues()[0];
  const headersMissing = currentHeaders.every(value => value === "");

  if (headersMissing) {
    headerRange.setValues([HEADERS]);
  }
}

function isDuplicateBooking(sheet, data) {
  const lastRow = sheet.getLastRow();

  if (lastRow <= 1) {
    return false;
  }

  const rows = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();
  const incomingKey = getBookingKey(data);

  return rows.some(row => {
    const existingData = {
      email: row[2],
      phone: row[3],
      service: row[4],
      format: row[5],
      date: row[6],
      time: row[7]
    };

    return getBookingKey(existingData) === incomingKey;
  });
}

function getBookingKey(data) {
  return [
    data.email,
    data.phone,
    data.service,
    data.format,
    data.date,
    data.time
  ].map(value => String(value || "").trim().toLowerCase()).join("|");
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput("Booking API is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

3. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual Google Sheet ID.
4. Click the **Save** icon (diskette) at the top of the editor.

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
