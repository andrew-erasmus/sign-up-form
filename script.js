let submitButton = document.getElementById("submit");  
let errorMessage = document.getElementById("error");
errorMessage.style.display = "none";
submitButton.addEventListener("click", (e) => {
    errorMessage.style.display = "none";
    let pInput = document.getElementById("password");
    let cpInput = document.getElementById("confirm-password");

    let password = pInput.value;
    let confirmPassword = cpInput.value;

    if (password !== confirmPassword){
        errorMessage.style.display = "block";
        console.log("Passwords do not match");
    }
    
    
});