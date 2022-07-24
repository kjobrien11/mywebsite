//via https://www.fwait.com/
class RowData {
    constructor(command, page) {
      this.command = command;
      this.page = page;
    }
  }
const tableData = [];

let input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        const querry = document.getElementById("userInput").value.split(" ");
        getCall(querry);
    }
})
function redClick(){
    window.open('', '_self', ''); 
    window.close();
}

function getCall(querry){
    displayRow(querry);
    document.getElementById("userInput").value = "";
    if(querry[0] == "pwd"){

    }
    else if(querry[0] == "open"){
        parseInput(querry);
    }else if(querry[0] == "ls"){
        
    }else{
        addRow('zsh: command not found: ' + querry[0], " ", document.getElementById("gui").rows.length-1);
    }
}
function addRow(c, p, s){
    var table = document.getElementById("gui");
    var row = table.insertRow(s);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "(base) kjobrien@KJs-MacBook-Pro kjobrienweb %";
    cell2.innerHTML = c + " " + p;
}
function displayRow(querry){
  alert(tableData.length);
  tableData.push(new RowData(querry[0], querry[1]));
  alert(tableData.length);
  addRow(querry[0], querry[1], document.getElementById("gui").rows.length-1);
  
}

function parseInput(querry) {
    
    var inp = querry[1];
    sessionStorage.setItem('arr', tableData);
    a = sessionStorage.getItem('arr');
    alert(a.command);
    if(inp =="resume.html"){
        window.location.href = "resume.html";
    }
    else if(inp =="connect.html"){
        window.location.href = "connect.html";
    }
    else if(inp =="about.html"){
        window.location.href = "about.html";
    }
    else{
        addRow('The file /Users/kjobrien/Desktop/kjobrienweb/' + inp +' does not exist.', " ", document.getElementById("gui").rows.length-1);
    }
}
function reconstructTable(){
   
    tableData = sessionStorage.getItem('arr');

    alert(tableData.length);
    for (let i = 0; i < tableData.length; i++) {
        let cur = tableData[i];
        addRow(cur.command, cur.page, i);
        console.log("creating: ");
      }
}

  
