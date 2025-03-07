document.getElementById('noButton').addEventListener('click', function() {
    // Get the button's dimensions
    const button = this;
    const container = document.querySelector('.container');
    
    // Get the container's dimensions
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Generate random positions
    const randomX = Math.random() * (containerWidth - button.offsetWidth);
    const randomY = Math.random() * (containerHeight - button.offsetHeight);

    // Set the new position
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});

document.getElementById('yesButton').addEventListener('click', function() {
    alert("Yay! I'm so happy you said yes!");
});