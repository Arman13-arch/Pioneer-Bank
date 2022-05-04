// Login Button Activity 
const login_button = document.getElementById("log_btn");
login_button.addEventListener("click", function(){
   const log_area =  document.getElementById("login-area");
   log_area.style.display="none";
   const trans_area =  document.getElementById("transaction-area");
   trans_area.style.display="block";
})

// Deposit Button Activity 
const dipBtn = document.getElementById("dipBtn");
dipBtn.addEventListener("click",function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    updateSpanText("dipBal",depositNumber);
    updateSpanText("totalBal",depositNumber);
})


// Withdraw Button Activity 
const witBtn = document.getElementById("witBtn");
witBtn.addEventListener("click",function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);

    // updateSpanTextWith("witBal",withdrawNumber);
    // updateSpanTextWith("totalBal",withdrawNumber);
    const currentwithdraw =  document.getElementById("witBal").innerText  ;
    const currentWithdrawNumber = parseFloat(currentwithdraw);
    const totalWitBal = withdrawNumber + currentWithdrawNumber;
    document.getElementById("witBal").innerText = totalWitBal ;

    const currentbal =  document.getElementById("totalBal").innerText  ;
    const currentBalNumber = parseFloat(currentbal);
    const totalBalance =  currentBalNumber - withdrawNumber;
    document.getElementById("totalBal").innerText = totalBalance ;

})


function updateSpanText(id,depositNumber){
    const current =  document.getElementById(id).innerText  ;
    const currentNumber = parseFloat(current);
    const totalBalance = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalBalance ;
}


// function updateSpanTextWith(id,withdrawNumber){
//     const current =  document.getElementById(id).innerText  ;
//     const currentNumber = parseFloat(current);
//     const totalBalance = currentNumber - withdrawNumber;
//     document.getElementById(id).innerText = totalBalance ;
// }