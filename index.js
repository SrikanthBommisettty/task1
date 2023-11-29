
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    console.log("Submit button:", submitButton);

    submitButton.addEventListener("click", function () {
        console.log("Submit button clicked");
        openpage();
    });

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
    const signUpButton = document.getElementById("signUpbutton");
    signInButton.addEventListener("click", changepage);
    signUpButton.addEventListener("click", changepage);
});

function openpage() {
    console.log("Opening studio page");
    window.location.href = './studio.html';
}

const submitButton = document.getElementById("submit");
console.log("Submit button:", submitButton);
submitButton.addEventListener("click", function () {
    console.log("Submit button clicked");
    openpage();
});


const submitButtons = document.getElementById("submits");
console.log("Submit button:", submitButton);
submitButton.addEventListener("click", function () {
    console.log("Submit button clicked");
    openpage();
});
