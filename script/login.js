

document.getElementById("login-btn").addEventListener("click", function(){
    const numberInput = document.getElementById("input-num");
    const contactNum = numberInput.value;
    console.log(contactNum);

    const pinInput = document.getElementById("input-pin");
    const pin =pinInput.value;
    console.log(pin);

    if(contactNum == "01234567890" && pin =="1234"){
        alert("Login Successful");
        window.location.assign("./home.html");
    }
    else{
        alert("Login Failed");
        return;
    }
})