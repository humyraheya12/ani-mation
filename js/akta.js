let state = 0; // 0: Initial, 1: Two Yes buttons, 2: Text "I love you"

function clickFunction() {
    const element = document.getElementById('click-me');

    if (state === 0) {
        // Change to "Do you love me?" (only the first click)
        element.innerHTML = 'Do you love me?';
        state = 1;
    } else if (state === 1) {
        // Change to two Yes buttons
        element.innerHTML = `
            <button class="btn mx-2" onclick="clickFunction()">Yes</button>
            <button class="btn mx-2" onclick="clickFunction()">Yes</button>
        `;
        state = 2;
    } else if (state === 2) {
        // Replace "Yes" buttons with plain text "I love you"
        element.innerHTML = `
            <span class="text-3xl text-red-600 font-semibold">I love you</span>
        `;
        state = 3;
    }
}
