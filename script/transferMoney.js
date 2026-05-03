document.getElementById("transfer-btn").addEventListener("click", function(){
    const number = getValueFromInput("user-num");
        if(number.length != 11){
        alert("Invalid number!!");
        return;
    }
    const amount = getValueFromInput("transfer-amount");

   const currentBalance = getBalance();

    const newBalance = currentBalance - Number(amount);
    console.log("New balance: ",newBalance)
        if(newBalance < 0){
        alert("Invalid amount");
        return;
      }

      const pin = getValueFromInput("transfer-pin");
          if(pin == "1234"){
        alert("Money Transferred successfully");
       setBalance(newBalance);
       const history = document.getElementById("history-container");
     const newHistory = document.createElement("div");
     newHistory.innerHTML = `
      <div class="history-card p-5 bg-base-100 ">
        
        Transfer money ${amount}TAKA  success to  Acc-no ${number} at ${new Date()}
      </div>
     `
     history.append(newHistory);
            }else{
        alert("Invalid pin");
        return;
    }

})