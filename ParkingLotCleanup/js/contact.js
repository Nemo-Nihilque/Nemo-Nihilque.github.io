"use strict"

const $ = selector => document.querySelector(selector);

const newsletter = evt => {
    // get user input
    const input = $("#newsletter").value;

    // clear text box
    $("#newsletter").value = "";
    
    // varify
    let isValid = true;
    if (input.length < 11 || input.substring(input.length-10) != "@gmail.com") { 
        $("#h1Newsletter").textContent = "Email must be at least 11 characters long, and hosted @gmail.com";
        isValid = false;
    } else { 
        $("#h1Newsletter").textContent = "Thank you for signing up for our newsletter " + input + "!";
    }

    // cancel form submit if any user entries are invalid
    if ( !isValid ) {
        evt.preventDefault(); 
    }

    $("#newsletter").focus();
};

const contact = evt =>{
    // get user input
    const nameIn = $("#name").value;
    const subjectIn = $("#subject").value;
    const textIn = $("#textareaContact").value;

    // calculate and output
    let isValid = true;
    if (nameIn == "" || subjectIn == "" || textIn == "") { 
        $("#h1Contact").textContent = "Please make sure all fields are filled";
        isValid = false;
    } else { 
        $("#h1Contact").textContent = "Thank you for contacting us " + nameIn + ".";
    }

    // clear text box
    $("#name").value = "";
    $("#subject").value = "";
    $("#textareaContact").value = "";

    // cancel form submit if any user entries are invalid
    if ( !isValid ) {
        evt.preventDefault(); 
    }

    $("#name").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for calculate button
    $("#submitNewsletter").addEventListener("click", newsletter);
    $("#submitContact").addEventListener("click", contact);

    // set focus on text box after the form loads
    $("#newsletter").focus();
});