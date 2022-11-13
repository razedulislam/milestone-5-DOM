function getRed(){
    document.body.style.backgroundColor = 'red';
}
const blueButon = document.getElementById('blueButon');
//only call function name not use here this ()
//if blueButtons() is used it will set background color when the page load . that means we will see color without button click
blueButon.onclick = blueButtons ;

function blueButtons(){
    document.body.style.backgroundColor = 'blue';
}

// handle event using anonymous function 
const orangeBtn = document.getElementById('orangeBtn');
//anonymous function a function er name use hoi na
orangeBtn.onclick = function(){
    document.body.style.backgroundColor = 'orange';
}

// handle by using add event listener 
//follow 3 step 
// 1. catch id .   2. use addEventListener and here are two parameter ('eventName', functionName) 3. write function code to perform event
const goldenRodBtn = document.getElementById('goldenRodBtn');

goldenRodBtn.addEventListener('click', goldenBtn);

function goldenBtn(){
    document.body.style.backgroundColor = 'goldenRod';
}

// Or = handle by using add event listener
const darkBlue = document.getElementById('darkBlue');
darkBlue.addEventListener('click' , function darkBlueBtn(){
    document.body.style.backgroundColor = 'darkBlue' ;
})

// direct use of anonymous function / mainly used 

const cyanbtn = document.getElementById('cyanbtn').addEventListener('click' , function(){
    document.body.style.backgroundColor = 'cyan';
})