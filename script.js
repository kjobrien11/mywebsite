//via https://www.fwait.com/
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
    if(querry[0] == "pwd"){

    }
    else if(querry[0] == "open"){
        parseInput(querry);
    }else if(querry[0] == "ls"){
        
    }else{
        alert('zsh: command not found: ' + querry[0])
    }
}
function addRow(querry){
  var table = document.getElementById("gui");
  var row = table.insertRow(document.getElementById("gui").rows.length-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "(base) kjobrien@KJs-MacBook-Pro kjobrienweb %";
  cell2.innerHTML = querry[0] + " " + querry[1];
}
function parseInput(querry) {
    document.getElementById("userInput").value = "";
    var inp = querry[1];
    addRow(querry);
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
        alert('The file /Users/kjobrien/Desktop/kjobrienweb/' + inp +' does not exist.');
    }
}


  
