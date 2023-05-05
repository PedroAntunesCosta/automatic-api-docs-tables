function generate() {

    // 1. 
    console.log('Clearing data from the output doc');
    const outputDoc = DocumentApp.openById(OUTPUT_DOC_ID);
    outputDoc.getBody().clear();
  
    // Getting data from spreadsheet
    console.log('Getting data from the spreadsheet');
    const sheet = SpreadsheetApp.openById(FIELDS_SHEET_ID).getSheetByName('Fields');
    const tablesFull = sheet.getRange(2, 1, sheet.getLastRow()-1, 1).getValues().map(x => x[0]);
    const data = sheet.getRange(2, 1, sheet.getLastRow()-1, 3).getValues();
    const docFormat = sheet.getRange(2, 4).getValue();
    const tableNames = [... new Set(tablesFull)];
  
    // 2. Formatting and requesting completion for each table
    // Iterate by table names
    console.log('Generating tables')
    var promptTable = '';
    for (tableName of tableNames) {
      console.log(tableName)
      
      // Writing table title
      outputDoc.getBody().appendParagraph('\n\n### ' + tableName);
  
      if (docFormat == 'Markdown') {
  
        promptTable = '## ' + tableName + '\n\n| Field | Type | Description |\n| ----- | ----- | ----- |';
        
        // Iterate by data row
        for (row of data) {
          if (row[0] == tableName) {
            promptTable = promptTable + '\n| ' + row[1] + ' | ' + row[2] + ' |  |'
          };
        };
      };
  
      if (docFormat == 'HTML') {
  
        promptTable = '## ' + tableName + '\n\n<table>\n  <thead>\n    <tr>\n      <th>Field</th>\n      <th>Type</th>\n      <th>Description</th>\n    </tr>\n  </thead>\n  <tbody>';
        
        // Iterate by data row
        for (row of data) {
          if (row[0] == tableName) {
            promptTable = promptTable + '\n    <tr>\n      <td>' + row[1] + '</td>\n      <td>' + row[2] + '</td>\n      <td> </td>\n    </tr>'
          };
        };
  
        promptTable = promptTable + '\n  </tbody>\n</table>\n\n'
      }; 
  
  
      const generatedTable = requestChatGeneration(promptTable);
      promptTable = ''
  
      // Writing generated table to output doc
      outputDoc.getBody().appendParagraph(generatedTable);
  
    };
      
      outputDoc.getBody().replaceText('```html', '');
      outputDoc.getBody().replaceText('```', '');
  
  };
  
  function requestChatGeneration(table) {
  
    // Getting doc format setting from sheet
    const sheet = SpreadsheetApp.openById(FIELDS_SHEET_ID).getSheetByName('Fields');
    const docFormat = sheet.getRange(2, 4).getValue();
  
    // Preparing API request 
    // ChatGPT API docs: https://platform.openai.com/docs/guides/chat and https://platform.openai.com/docs/api-reference/chat
    // console.log('Setting ChatGPT API request variables');
    const chatEndpoint = 'https://api.openai.com/v1/chat/completions';
    var prompt = 'Please fill in the third column of the ' + docFormat + ' table below with short objective descriptions.' + table;
    var payload = {
      'model': 'gpt-3.5-turbo',
      'temperature': 0.5,
      'messages': [
        {
        'role': 'system',
        'content': 'You are an API documentation specialist.'
        },
        {
        'role': 'user',
        'content': prompt
        }
      ]
    };
  
    // console.log('Sending request to ChatGPT API')
    const chatResponse = UrlFetchApp.fetch(
      chatEndpoint,
      {
        'method': 'post',
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+OPEN_AI_KEY
        },
        'payload': JSON.stringify(payload)
      }
    )
    const responseObj = JSON.parse(chatResponse.getContentText());
  
    return String(responseObj.choices[0].message.content)
  
  };
  