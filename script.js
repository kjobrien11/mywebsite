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

function getCall(querry){
    
    document.getElementById('userInput').value = '';
    if(querry[0] == 'ls'){
        displayRow(querry[0], '');
        addRow('about.html connect.html resume.html', '', document.getElementById('gui').rows.length-1);
        formatForSession('ls', '');
        formatForSession('about.html connect.html resume.html', '');
    }
    else if(querry[0] == 'open'){
        displayRow(querry[0], querry[1]);
        parseInput(querry); 
    }else if(querry[0] == 'help'){
        displayRow(querry[0], querry[1]);
        addRow('commands: open, ls, help, clear', '', document.getElementById('gui').rows.length-1);
        formatForSession('help', '');
        formatForSession('commands: open, ls, help, clear', '');

    }else if(querry[0] == 'clear'){
        let t = []
        sessionStorage.setItem('array', JSON.stringify(t));
        window.location.href = 'index.html';
    }
    else{
        console.log(querry.length)
        if(querry.length == 1){
            displayRow(querry[0], " ");
            
        }else{
            displayRow(querry[0], querry[1]);
        }
        
        formatForSession(querry);
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
    if(p == null){
        p = "";
    }
    cell1.innerHTML = '(base) kjobrien@KJs-MacBook-Pro kjobrienweb %';
    cell2.innerHTML = c + ' ' + p;
}
function displayRow(c, p){
  tableData.push(new RowData(c, p));
  addRow(c, p, document.getElementById('gui').rows.length-1);
  
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
        for (let i = 0; i <= t.length-1; i=i+2) {
            addRow(t[i], t[i+1], document.getElementById('gui').rows.length-1);
        }
    }
    
}

function help(){
    alert('Welcome! This page operates like a mac OS terminal. \r\n\r\nFor a list of the commands type: \”help\” \r\nFor a list of all the files type: \”ls\” \r\nTo open a specific file type: \”open <file>.html\”\r\nTo clear the log type: \”clear\” ');
}

//via https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device
function isMobile() {
    try{ document.createEvent("TouchEvent"); return true; }
        catch(e){ return false; 
    }
  }

  function checkMobile(){
    if(isMobile()){
        var z = document.getElementById("_body");
        z.style.zoom = '50%';
    }else{
    }
  }