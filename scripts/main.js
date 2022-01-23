
// we get the button and the heading of the epage and store it in a variable.
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// We create a function called setVisitorName
function setVisitorName() {
    let visitorName = prompt("please enter your name"); // prompt is used to allow a visitor type his name in our webpage.
    if (!visitorName) { // this is to make sure that we have an actual value from our user.
        setVisitorName();
    } else {
        localStorage.setItem("name", visitorName); // this allows us to store values in our browser so that we can recover it later.
        myHeading.textContent =
            "Hello " + visitorName + ", Welcome To My Beah Resort"; // This is where we change the content of the heading.
    }
}

//we add  a condition to check if we already have a stored name
if (!localStorage.getItem('name')) {
    setVisitorName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Hello " + storedName + ", Welcome To My Beach Resort";
}


myButton.onclick = function(){
    setVisitorName();
}