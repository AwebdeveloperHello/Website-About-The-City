function updateClock() {
    
    
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`; 
    document.getElementById("clock").textContent = timeString;

}

updateClock();
setInterval(updateClock, 10);


const button = document.getElementById('ChangeBack');
const body = document.getElementById('BackGroundMain');  
const storedColor = localStorage.getItem('backgroundColor');

    
if (storedColor) {
    body.style.backgroundColor = storedColor;
}

button.addEventListener('click', () => {
    const currentColor = body.style.backgroundColor;
    const newColor = currentColor === 'rgb(20, 20, 20)' ? 'white' : 'rgb(20, 20, 20)';

    body.style.backgroundColor = newColor;
    localStorage.setItem('backgroundColor', newColor); // Save the new color
});


// Turn of one music, when another one is playing.
const audioElements = document.querySelectorAll('audio');

audioElements.forEach(audio => {
  audio.addEventListener('play', () => {
    audioElements.forEach(otherAudio => {
      if (otherAudio !== audio) {
        otherAudio.pause();
      }
    });
  });
});

// Rotating cube

let angle = 0;

const div = document.getElementById("Cube");
window.setInterval(rotate, 20);

function rotate() {
    div.style.transform = `rotate(${angle}deg)`;
    angle += 1;
}