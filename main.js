// Grab the h1 element containing this class
let textEl = document.getElementsByClassName("typed-text");

// We receive an HTML collection object 
textEl = textEl[0];

// Callback function to pause for-loop execution
function timer(ms) {
    textEl.classList.add("no-blink");
    textEl.classList.remove("typed-text");
    return new Promise(res => setTimeout(res, ms));
}

// Handles typing effect
async function type (text) {
    // Iterates through each char in the string
    for (let i = 0; i < text.length; i++) {
        
        // Grab the ith char in the string
        let letter = text.charAt(i);

        // Append
        document.querySelector(".typed-text").textContent += letter;

        // Random delay value to simulate typing
        let delay = Math.floor(Math.random() * 50) + 90;
        await timer(delay);
        textEl.classList.add("typed-text");
        textEl.classList.remove("no-blink");
    }

};

type("hi, i'm arif bashar. :)");
// await type("hi");
