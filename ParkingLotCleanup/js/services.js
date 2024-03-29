"use strict"

const $ = selector => document.querySelector(selector);

const trashCalc = evt => {
    // get user input
    const input = $("#trashCostInput").value;

    // clear text box
    $("#trashCostInput").value = "";
    
    // calculate and output
    let isValid = true;
    if(!/^[1-9][0-9]*$/.test(input)){
        $("#trashCostOutput").textContent = "Please enter a number greater than zero.";
        isValid = false;
    } else {
        let dollarFormat = Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        });
        $("#trashCostOutput").textContent = input + " Cost: " + dollarFormat.format((input / 5280) * 75 + 25);
    }

    // cancel form submit if any user entries are invalid
    if ( !isValid ) {
        evt.preventDefault(); 
    }

    $("#trashCostInput").focus();
};

const pressureCalc = evt => {
    // get user input
    const input = $("#pressureCostInput").value;

    // clear text box
    $("#pressureCostInput").value = "";
    
    // calculate and output
    let isValid = true;
    if(!/^[1-9][0-9]*$/.test(input)){
        $("#pressureCostOutput").textContent = "Please enter a number greater than zero.";
        isValid = false;
    } else {
        let dollarFormat = Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        });
        $("#pressureCostOutput").textContent = input + " Cost: " + dollarFormat.format((input / 5280) * 1975 + 25);
    }

    // cancel form submit if any user entries are invalid
    if ( !isValid ) {
        evt.preventDefault(); 
    }

    $("#pressureCostInput").focus();
};


document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for calculate button
    $("#trashCostCalc").addEventListener("click", trashCalc);
    $("#pressureCostCalc").addEventListener("click", pressureCalc);

    // set focus on text box after the form loads
    $("#trashCostInput").focus();
});