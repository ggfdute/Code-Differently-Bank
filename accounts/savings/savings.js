let balance = 0;

function add(){
    let deposit = parseInt(document.getElementById("amount-in").value);
    
    if(deposit < 1){
        document.getElementById("error").innerHTML = "Can not deposie a negative amount or Zero.";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").style.color = "red";
    }else{
        document.getElementById("error").innerHTML = "Successful";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").style.color = "green";
        balance += deposit;
    }
    
}

function subtract(){
    let withdrawal = parseInt(document.getElementById("amount-out").value);
    if(withdrawal > balance){
        document.getElementById("error").innerHTML = "You can not take out more money than you have in.";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").style.color = "red";
    }else{
        document.getElementById("error").innerHTML = "Successful";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").style.color = "green";
        balance -= withdrawal;
    }
}

function money() {
    alert("Your balance is $" + balance);
    document.getElementById("error").style.display = "none";
}