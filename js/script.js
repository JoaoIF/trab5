const box = document.querySelector("#box");


function rangerL() {
    const res = document.querySelector("#dms");
    const iptL = document.querySelector("#iptLargura");
    
    res.innerHTML = ': ' + iptL.value+'x';

    box.style.width = iptL.value+"px";
}
    
function rangerA() {
    const res = document.querySelector("#dms1");
    const iptA = document.querySelector("#iptAltura");
    
    res.innerHTML = iptA.value;

    box.style.height = iptA.value+"px";
}

function mudarCor() {
    // const labelRed = document.querySelector("#lblRed");
    // const inputRed = document.querySelector("#iptRed");
    // labelRed.innerHTML = inputRed.value;

    let red = document.getElementById("iptRed").value;
    let green = document.getElementById("iptGreen").value;
    let blue = document.getElementById("iptBlue").value;
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    box.style.backgroundColor = color; 
    document.getElementById("rgb").innerHTML = ': ' + color;

    document.getElementById('iptRed').addEventListener('input',mudarCor);
    document.getElementById('iptGreen').addEventListener('input',mudarCor);
    document.getElementById('iptGreen').addEventListener('input',mudarCor);  
}
    
function changeTop() {
    const inputTop = document.querySelector("#iptTop");
    const labelTop = document.querySelector("#lblTop");
    labelTop.innerHTML = inputTop.value;

    box.style.top = inputTop.value + "px";

}

function changeLeft() {
    const inputLeft = document.querySelector("#iptLeft");
    const labelLeft = document.querySelector("#lblLeft");
    labelLeft.innerHTML = inputLeft.value;

    box.style.left = inputLeft.value + "px";
}

