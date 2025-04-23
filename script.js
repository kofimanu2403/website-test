function displayScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('screen-size').textContent = `Width: ${width}px, Height: ${height}px`;
}

function updateMousePosition(event) {
    const x = event.clientX;
    const y = event.clientY;
    document.getElementById('mouse-input').textContent = `Mouse Position: (${x}, ${y})`;
}

function updateButtonInput(event) {
    document.getElementById('button-input').textContent = `Last Button Pressed: ${event.key}`;
}

window.onload = displayScreenSize;
window.onresize = displayScreenSize;
window.onmousemove = updateMousePosition;
window.onkeydown = updateButtonInput;