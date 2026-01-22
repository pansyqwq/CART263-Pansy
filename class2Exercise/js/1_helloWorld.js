//controlling when to on load, here we r loading when the window appears
window.onload = setup

function setup(){
    console.log("running setup");
    // h2 means header 2, since we r using it in html, we need things like <h2>
    document.write("HELLO WORLD AFTER LOAD IN FUNCTION");
}