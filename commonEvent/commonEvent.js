function clickingMethod(){
    const p = document.getElementById('para');
    p.innerText = 'Text after changed';
}

document.getElementById('directFunc').addEventListener('click' , function(){
    const para = document.getElementById('para');
    para.innerText = 'Text after changed second btn';
})