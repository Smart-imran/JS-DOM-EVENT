const makebluebutton =document.getElementById("make-blue");
makebluebutton.onclick=makeBlue;


function makeBlue(){
    document.body.style.backgroundColor="Blue";
}

function makeRed() {
    document.body.style.backgroundColor = "Red";
}

const makePink =document.getElementById("make-pink");
       makePink.addEventListener("click",makesPink)

       function makesPink(){
        document.body.style.backgroundColor="Pink";
       }