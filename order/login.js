var errorMsg = document.querySelectorAll(".errMessage");
var input = document.querySelector(".username-input");
var submitBtn = document.querySelector(".signin-button");

submitBtn.addEventListener("click",function(){
    if(input.value < 1){
        errorMsg.textContent = "Please Enter your email"
    }
    // errorMsg.textContent = "Please Enter your email"
    
})