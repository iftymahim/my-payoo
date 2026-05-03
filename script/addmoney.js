document.getElementById("add-money-btn").addEventListener("click", function(){
   const bankAccount = getValueFromInput("add-money-bank");
   if(bankAccount == "Select a bank"){
    alert("Please Select a bank");
    return;
   }

   const accountNumber = getValueFromInput("account-num");
   if(accountNumber.length != "11"){
    alert("Invalid Number. Try again..");
    return ;
   }

   const amount = getValueFromInput("money-amount");
   const newAmount = getBalance() + Number(amount);
   

    const accountPin = getValueFromInput("add-money-pin");
   if(accountPin == "1234"){
     alert(`Add money success from ${bankAccount} at ${new Date()}`);
     setBalance(newAmount);
     const history = document.getElementById("history-container");
     const newHistory = document.createElement("div");
     newHistory.innerHTML = `
      <div class="history-card p-5 bg-base-100 ">
        
        Add money success from ${bankAccount} , Acc-no ${accountNumber} at ${new Date()}
      </div>
     `
     history.append(newHistory);
   }else{
    alert("Wrong pin. Try again..");
     return ;
   }
})