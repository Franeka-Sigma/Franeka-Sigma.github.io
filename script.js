id('tak').addEventListener('click', tak);
id('nie').addEventListener('mouseover', nie);
id('tak-2').addEventListener('click', tak2);
id('nie-2').addEventListener('mouseover', nie2);
id('tak-3').addEventListener('click', tak3);
id('nie-3').addEventListener('mouseover', nie3);
id('tak-4').addEventListener('click', tak4);
id('nie-4').addEventListener('mouseover', nie4);


function tak() {
    id('conf').style.visibility = 'visible';
}
function tak2() {
    id('love').style.visibility = 'visible';
}
function tak3() {
    id('wedding').style.visibility = 'visible';
}
function tak4() {
    const yay = document.createElement('div');
    yay.style.width = '30rem';
    yay.style.height = '10rem';
    yay.style.backgroundColor = '#feeaa6';
    yay.style.border = '0.2rem #ff006a solid';
    yay.style.borderRadius = '2rem';
    yay.style.fontSize = '5rem';
    yay.innerText = 'YIPEEE!!!!!';
    randomPos(yay);
    id('wedding').appendChild(yay);
}

function nie() {
    randomPos(id('nie'))
}
function nie2() {
    randomPos(id('nie-2'))
}
function nie3() {
    randomPos(id('nie-3'))
}
function nie4() {
    randomPos(id('nie-4'))
}

function randomPos(id) {
    id.style.position = 'fixed';
    id.style.bottom = Math.round(Math.random() * 90) + '%';
    id.style.right = Math.round(Math.random() * 90) + '%';
}

function id(id) {
    return document.getElementById(id);
}