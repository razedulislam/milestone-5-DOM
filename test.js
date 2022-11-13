function depoTotall(id){
    const withdrowInput = document.getElementById(id) ;
    const withdrawInput = (withdrowInput.value) ;
    const withdrawInputValue = parseFloat(withdrawInput) ;
    withdrowInput.value = '' ;
    return withdrawInputValue ;

}

function totalAmount(getID , depoInputValue){
    const depoTotal = document.getElementById(getID) ;
    const depoTotalValue = parseFloat(depoTotal.innerText) ;
    depoTotal.innerText = depoInputValue + depoTotalValue ;
}

function getTotalamount(withdrawInputValue){
    const balanceTotal = document.getElementById('balance-total') ;
     const balanceTotalValue = parseFloat(balanceTotal.innerText) ;
     balanceTotal.innerText = balanceTotalValue - withdrawInputValue ; 
}

document.getElementById('depositeBtn').addEventListener('click' , function(){

    const depoInputValue = depoTotall('depositeInput') ; 
   totalAmount('deposite-total' , depoInputValue) ;
    getTotalamount(-depoInputValue) ;

}) ;

document.getElementById('withdrawBtn').addEventListener('click' , function(){

    const withdrawInputValue = depoTotall('withdrowInput') ;
    const totalAmn = totalAmount('withdrawTotal' , withdrawInputValue) ;
    getTotalamount(withdrawInputValue);    

})

