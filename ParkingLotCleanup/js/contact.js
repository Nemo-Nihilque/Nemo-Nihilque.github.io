"use strict"

const $ = selector => document.querySelector(selector);

const newsletter = evt => {
    // get user input
    const input = $("#newsletter").value;

    // clear text box
    $("#newsletter").value = "";
    
    // varify
    let isValid = true;
    if(!/^\w+@\w+\.\w{3}$/.test(input)) {
        $("#h1Newsletter").textContent = "Please enter a valid email.";
        isValid = false;
    } else{
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
    const currentDate = new Date();

    // calculate and output
    let isValid = true;
    if (!/^\b\w+\b( \b\w+\b)*$/.test(nameIn) || !/^\b\w+\b( \b\w+\b)*$/.test(subjectIn) || !/\w+/.test(textIn)) { 
        $("#h1Contact").textContent = "Please make sure all fields are filled";
        isValid = false;
    } else { 
        $("#h1Contact").textContent = "Thank you " + nameIn + " for contacting us on " + currentDate.toDateString() + ".";
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