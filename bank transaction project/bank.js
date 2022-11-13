document.getElementById('depositeBtn').addEventListener('click' , function(){
    const depositeInput = document.getElementById('depositeInput') ;
   const newDeposite = depositeInput.value ;//deposite input er value ta ekta variable a rakha hoyeche
   // console.log(newDeposite) ;
   const depositeTotal = document.getElementById('deposite-total') ;

   const previousdeposite = depositeTotal.innerText ; // kichui na ekhane just ekta variable previousdeposite a deposite total er innerText rakha hoyeche
   // console.log(previousdeposite) ;
   const currentBalance = parseFloat(previousdeposite) + parseFloat(newDeposite) ;
   depositeTotal.innerText = currentBalance ; // total value just depositeTotal a rakha hoyche

//    update account balance 

const balanceTotal = document.getElementById('balance-total') ;
const upCurrentBalance = balanceTotal.innerText ;
const updatedBalance = parseFloat(upCurrentBalance) + parseFloat(newDeposite) ;
balanceTotal.innerText = updatedBalance ;


  
//   clear deposite Input field 
depositeInput.value = '';
   
});

document.getElementById('withdrawBtn').addEventListener('click' , function(){
    const withdrowInput = document.getElementById('withdrowInput') ;
   const newWithdraw = withdrowInput.value ;
//    console.log(newWithdraw) ;
   const withdrawTotal = document.getElementById('withdrawTotal') ;
   const previous = withdrawTotal.innerText ;
//    console.log(previous);
   const updatedWithdraw =  parseInt(previous) + parseFloat(newWithdraw) ;
   withdrawTotal.innerText = updatedWithdraw ;

// update balance 
  const balanceTotal = document.getElementById('balance-total') ;
   const balanceInText = balanceTotal.innerText ;
   const balanceNumber = parseFloat(balanceInText);
    // console.log(balanceNumber) ;
    const balanceAfterWith = balanceNumber - parseFloat(newWithdraw) ;
    balanceTotal.innerText = balanceAfterWith ;

withdrowInput.value ='';

//    withdrowInput.value = '' ;
})

