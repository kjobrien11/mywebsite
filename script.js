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
        const querry = document.getElementById('userInput').value.split(' ');
        getCall(querry);
    }
})
function redClick(){
    window.open('', '_self', ''); 
    window.close();
}

function getCall(querry){
    
    document.getElementById('userInput').value = '';
    if(querry[0] == 'ls'){
        displayRow(querry[0], '');
        addRow('about.html connect.html resume.html', '', document.getElementById('gui').rows.length-1);

    }
    else if(querry[0] == 'open'){
        displayRow(querry[0], querry[1]);
        parseInput(querry); 
    }else{
        displayRow(querry[0], querry[1]);
        addRow('zsh: command not found: ' + querry[0], ' ', document.getElementById('gui').rows.length-1);
        formatForSession('zsh: command not found: ' + querry[0], ' ');
    }
}
function addRow(c, p, s){
    //via w3schools
    let table = document.getElementById('gui');
    let row = table.insertRow(s);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = '(base) kjobrien@KJs-MacBook-Pro kjobrienweb %';
    cell2.innerHTML = c + ' ' + p;
}
function displayRow(c, p){
  //alert(tableData.length);
  tableData.push(new RowData(c, p));
  //alert(tableData.length);
  addRow(c, p, document.getElementById('gui').rows.length-1);
  
}

function dealWithSession(querry){
    if(sessionStorage.length != 0){
        let t = JSON.parse(sessionStorage.getItem('array'));
        t.push(querry[0]);
        t.push(querry[1]);
        sessionStorage.setItem('array', JSON.stringify(t));
    }else{
        let t = [];
        t.push(querry[0]);
        t.push(querry[1]);
        sessionStorage.setItem('array', JSON.stringify(t));
    }
}
function formatForSession(q1, q2){
    let temparr = [];
    temparr.push(q1);
    temparr.push(q2);
    dealWithSession(temparr);
}

function parseInput(querry) {
    
    dealWithSession(querry);
    let inp = querry[1];

    const test = sessionStorage.getItem('array');

    if(inp =='resume.html'){
        window.location.href = 'resume.html';

    }
    else if(inp =='connect.html'){
        window.location.href = 'connect.html';

    }
    else if(inp =='about.html'){
        window.location.href = 'about.html';
        
    }
    else{
        addRow('The file /Users/kjobrien/Desktop/kjobrienweb/' + inp +' does not exist.', ' ', document.getElementById('gui').rows.length-1);
        formatForSession('The file /Users/kjobrien/Desktop/kjobrienweb/' + inp +' does not exist.', '');

    }
}
function reconstructTable(){
   
    if(sessionStorage.length != 0){
        let t = JSON.parse(sessionStorage.getItem('array'));
        for (let i = 0; i <= t.length/2; i=i+2) {
            addRow(t[i], t[i+1], document.getElementById('gui').rows.length-1);
        }
    }
    
    
}

  //find out why it isnt working with object, fix the json