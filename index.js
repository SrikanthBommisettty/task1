document.addEventListener("DOMContentLoaded", function () {
    
    const signInPage = document.getElementById("signin-page");
    const signUpPage = document.getElementById("signup-page");
    signInPage.style.display = "none";

    function changepage() {
        if (signInPage.style.display === "none") {
            
            signInPage.style.display = "block";
            signUpPage.style.display = "none";
        } else {
            
            signInPage.style.display = "none";
            signUpPage.style.display = "block";
        }
    }

    const signInButton = document.getElementById("signinbutton");
    const signUpButton = document.getElementById("signUpbutton")
    signInButton.addEventListener("click", changepage);
    signUpButton.addEventListener("click", changepage );
});


document.addEventListener("DOMContentLoaded", function () {
    

    
    function showSignupSuccessPopup() {
        const popup = document.getElementById("signup-success-popup");
        const overlay = document.getElementById("overlay");

        
        popup.style.display = "block";
        overlay.style.display = "block";
    }

    
    function closePopup() {
        const popup = document.getElementById("signup-success-popup");
        const overlay = document.getElementById("overlay");

        
        popup.style.display = "none";
        overlay.style.display = "none";
    }

    const submitButton = document.querySelector("#signup-page button.signbtn");
    submitButton.addEventListener("click", showSignupSuccessPopup);

    const closeButton = document.querySelector("#signup-success-popup button");
    closeButton.addEventListener("click", closePopup);
});
