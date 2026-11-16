function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var p = e.parameter;

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Date', 'Name', 'Email', 'Phone', 'Country', 'Company', 'Project', 'Message']);
    }

    sheet.appendRow([
      new Date(),
      p.name || '',
      p.email || '',
      p.phone ? "'" + p.phone : '',   // leading ' keeps "+44 ..." as text, not a formula/number
      p.country || '',
      p.company || '',
      p.project || '',
      p.message || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
