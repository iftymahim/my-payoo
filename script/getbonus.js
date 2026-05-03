document.getElementById("bonus-btn").addEventListener("click", function () {

  const newAmount = getBalance() + 200;

  const input = document.getElementById("bonus-coupon"); 
  const coupon = input.value; 
  if (coupon === "samiul") {
    alert("Congratulations !! You got 200tk bonus");
    setBalance(newAmount);
         const history = document.getElementById("history-container");
     const newHistory = document.createElement("div");
     newHistory.innerHTML = `
      <div class="history-card p-5 bg-base-100 ">
        
        Bonus money 200tk added to Account at ${new Date()}
      </div>
     `
     history.append(newHistory);

    input.value = ""; 
  } else {
    alert("Invalid Coupon");

    input.value = ""; 
  }
});