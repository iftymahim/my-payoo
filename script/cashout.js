
document.getElementById("cashout-btn").addEventListener("click", function(){
    const number = getValueFromInput("cashout-num");
        if(number.length != 11){
        alert("Invalid number!!");
        return;
    }
    const amount = getValueFromInput("cashout-amount");

   const currentBalance = getBalance();

    const newBalance = currentBalance - Number(amount);
    console.log("New balance: ",newBalance)
        if(newBalance < 0){
        alert("Invalid amount");
        return;
      }

      const pin = getValueFromInput("cashout-pin");
          if(pin == "1234"){
        alert("Cashout Successful");
       setBalance(newBalance);
            const history = document.getElementById("history-container");
     const newHistory = document.createElement("div");
     newHistory.innerHTML = `
      <div class="history-card p-5 bg-base-100 ">
        
       CashOut success from Acc-no${number} , amount ${amount} at ${new Date()}
      </div>
     `
     history.append(newHistory);
            }else{
        alert("Invalid pin");
        return;
    }

})








// document.getElementById("cashout-btn").addEventListener("click", function(){
//     const agentNumber = document.getElementById("cashout-num");
//     const cashoutNum = agentNumber.value;
//     console.log(cashoutNum);
//     if(cashoutNum.length != 11){
//         alert("Invalid number!!");
//         return;
//     }

//     const amountInput = document.getElementById("cashout-amount");
//     const amount = amountInput.value;
//     console.log(amount);

//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     const newBalance = Number(balance) - Number(amount);
   

//     if(newBalance < 0){
//         alert("Invalid amount");
//         return;
//     }

//     const pinInput = document.getElementById("cashout-pin");
//     const pin = pinInput.value;
    
//     if(pin == "1234"){
//         alert("Cashout Successful");
//         console.log("New Balance",newBalance);
//         balanceElement.innerText = newBalance;

//     }else{
//         alert("Invalid pin");
//         return;
//     }

// })