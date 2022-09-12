"use strict"

const $ = selector => document.querySelector(selector);

const calculate = evt => {
    // get user input
    const input = $("#sqrFootInput").value;

    // clear text box
    $("#sqrFootInput").value = "";
    
    // calculate and output
    let isValid = true;
    if (isNaN(input)) { 
        $("#sqrFootOutput").textContent = "Please enter a number.";
        isValid = false;
    } else { 
        let dollarFormat = Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        });
        $("#sqrFootOutput").textContent = input + " Square Feet: " + dollarFormat.format((input / 5280) * 20 + 10); 
    }

    // cancel form submit if any user entries are invalid
    if ( !isValid ) {
        evt.preventDefault(); 
    }

    $("#sqrFootInput").focus();
};


document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for calculate button
    $("#calculate").addEventListener("click", calculate);

    // set focus on text box after the form loads
    $("#sqrFootInput").focus();
});