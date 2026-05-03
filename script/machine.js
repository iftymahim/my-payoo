
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value =input.value;
    console.log(id, value);
    return value;
}

function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("Current Balance: ", Number(balance));
    return Number(balance);
}

function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

function showOnly(id){
    const addMoney = document.getElementById("addMoney");
    const cashOut = document.getElementById("cashout");
    const transferMoney = document.getElementById("transferMoney");
    const getBonus = document.getElementById("getBonus");
    const payBill = document.getElementById("payBill");
    const history = document.getElementById("history");

    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transferMoney.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden");
    history.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}