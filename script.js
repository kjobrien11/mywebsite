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
        parseInput(querry[1]);
    }else if(querry[0] == "ls"){
        
    }else{
        alert('zsh: command not found: ' + querry[0])
    }
}
function parseInput(querry) {

    var inp = querry;
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


  
