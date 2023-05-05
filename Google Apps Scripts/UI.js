function onOpen() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var GenerateMenu = [];
    
    GenerateMenu.push({name: 'Generate descriptions', functionName: "generate"});
  
    ss.addMenu("📝 Generate", GenerateMenu);
  }
  