console.log("hi from the script file");

function add(a, b) {
    for ( let i = 0; i < a; i += 1) {
        console.log(i);
    }
}

var sum = add(123, 456);

console.log(sum);

// This is a change I made

document.forms.contactForm.addEventListener('submit', (event) => {

    let catInput = document.getElementById('cat');
    let dogInput = document.getElementById('dog');
    let otherInput = document.getElementById('other');

    if ( ! catInput.checked && ! dogInput.checked && ! otherInput.checked ) {
        document.getElementById('radioError').textContent = "You need to pick one of these"
        document.getElementById('catLabel').style.color = 'red';
        event.preventDefault();
        return false;
    }
});