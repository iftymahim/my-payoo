document.getElementById("pay-bill-btn").addEventListener("click", function(){
    const number = getValueFromInput("biller-num");
        if(number.length != 11){
        alert("Invalid number!!");
        return;
    }
    const amount = getValueFromInput("bill-amount");

   const currentBalance = getBalance();

    const newBalance = currentBalance - Number(amount);
    console.log("New balance: ",newBalance)
        if(newBalance < 0){
        alert("Invalid amount");
        return;
      }

      const pin = getValueFromInput("pay-bill-pin");
          if(pin == "1234"){
        alert("Bill paid Successfully!! ");
       setBalance(newBalance);
            const history = document.getElementById("history-container");
     const newHistory = document.createElement("div");
     newHistory.innerHTML = `
      <div class="history-card p-5 bg-base-100 ">
        
        Bill paid from Acc-no ${number},Successfully at ${new Date()}
      </div>
     `
     history.append(newHistory);
            }else{
        alert("Invalid pin");
        return;
    }

})