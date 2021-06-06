// this JS file looks to ensure a valid email address is entered. If there is not, a proper error message will be displayed.

// assign the form
let theForm = document.querySelector(".form");
let theActualErrorMessage = document.querySelector(".errorMessageArea");

console.log(`The form is`, theForm);

// add an event listener on the form submission and call the function: validateForm
theForm.addEventListener("submit", validateForm);

function validateForm(e) {
    e.preventDefault(); //prevent reloading screen
    console.log(e.target[0].value); //get the inputted value
    let emailAddress = e.target[0].value;

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // perform a matching test. If valid,
    if (emailRegex.test(emailAddress)) {
        // if valid, set the input box back to blank
        e.target[0].value = "";
        theActualErrorMessage.textContent = "";
    } else if (emailAddress.length === 0) {
        // call a function to show error message as per design //
        msg = "Email address cannot be blank";
        showAlert(msg);
    } else {
        msg = "Please provide a valid email address";
        showAlert(msg);
    }
}

function showAlert(msg) {
    theActualErrorMessage.style.color = "red";
    theActualErrorMessage.style.margin = "20px";
    theActualErrorMessage.textContent = msg;

    // get rid of the error message after 1 second
    setTimeout(() => {
        theActualErrorMessage.style.display = "none";
    }, 1000);
}
