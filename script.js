
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
 
  function redClick(){
    window.open('', '_self', ''); window.close();
  }