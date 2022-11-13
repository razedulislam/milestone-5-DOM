function getInputValue(inputValue){
    const input = document.getElementById(inputValue);
    const inputText = input.value ;
    const newAmount = parseFloat(inputText) ;
    input.value = '' ;
    return newAmount ;
}

function deposite_total(depositeID , newDepoAmount){
    const deposite_total = document.getElementById(depositeID) ;
    const preDepoTotalText = deposite_total.innerText ;
    const preDepoTotalAmount = parseFloat(preDepoTotalText) ;
    deposite_total.innerText = newDepoAmount + preDepoTotalAmount ;

}

function updateBalance(newDepoAmount , isAdd){
    const balance_total = document.getElementById('balance-total');
    const balanceTotalText = balance_total.innerText ;
    const balance_totalAmount = parseFloat(balanceTotalText) ;
    if(isAdd==true){
        balance_total.innerText = balance_totalAmount + newDepoAmount ;
    }
    else{
        balance_total.innerText = balance_totalAmount - newDepoAmount ;
    }
    
   
}

document.getElementById('depositeBtn').addEventListener('click' , function(){
    // const depoInput = document.getElementById('depositeInput');
    // const depoText = depoInput.value ;
    // const newDepoAmount = parseFloat(depoText) ;

    const newDepoAmount = getInputValue('depositeInput') ;

    // const deposite_total = document.getElementById('deposite-total') ;
    // const preDepoTotalText = deposite_total.innerText ;
    // const preDepoTotalAmount = parseFloat(preDepoTotalText) ;
    // deposite_total.innerText = newDepoAmount + preDepoTotalAmount ;
  
    if(newDepoAmount>0){
        deposite_total('deposite-total' , newDepoAmount);
        updateBalance(newDepoAmount , true) ;
    }

    // depoInput.value = '' ;

    // update balance 
    // const balance_total = document.getElementById('balance-total');
    // const balanceTotalText = balance_total.innerText ;
    // const balance_totalAmount = parseFloat(balanceTotalText) ;
    // balance_total.innerText = balance_totalAmount + newDepoAmount ;
    
   
});


document.getElementById('withdrawBtn').addEventListener('click' , function(){
    // const withdrowInput = document.getElementById('withdrowInput') ;
    // const withdrawInputext = withdrowInput.value ;
    // const withdrawInpuAmount = parseFloat(withdrawInputext) ;
    const withdrawInpuAmount = getInputValue('withdrowInput') ;
    // set withdraw amount  
    // const withdrawTotal = document.getElementById('withdrawTotal') ;
    // const withdrawTotalAmount = parseFloat(withdrawTotal.innerText) ;
    
    // withdrawTotal.innerText = withdrawInpuAmount + withdrawTotalAmount ;
    if(withdrawInpuAmount>0){
        deposite_total('withdrawTotal' , withdrawInpuAmount);
        updateBalance( withdrawInpuAmount,false) ;
    }
    
    // updated balance 
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalAmount = parseFloat(balanceTotal.innerText) ;

    // balanceTotal.innerText = balanceTotalAmount - withdrawInpuAmount ;

    // set string empty 
    // withdrowInput.value = '' ;
    

})