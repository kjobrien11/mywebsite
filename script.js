//via https://www.fwait.com/
let input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        parseInput();
    }
})
function redClick(){
    window.open('', '_self', ''); window.close();
}
function parseInput() {

    var inp = document.getElementById("userInput").value
    if(inp =="resume.html"){
        window.location.href = "resume.html";
    }
    if(inp =="connect.html"){
        window.location.href = "connect.html";
    }
    if(inp =="about.html"){
        window.location.href = "about.html";
    }
}


  
