// Cake mode

tippy('#CakeModel',  {
  content: 'Торт из Дэпо',
  placement: 'bottom',
  theme: "text-properties"

});

tippy('#EdificeModel',  {
  content: 'Башни Комплекса',
  placement: 'bottom',
  theme: "text-properties"

});

tippy('#ClownModel',  {
  content: 'Книга Оно',
  placement: 'bottom',
  theme: "text-properties"

});

tippy('#GaleryModel',  {
  content: 'Картина Три Богатыря',
  placement: 'bottom',
  theme: "text-properties"

});



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

const jsFrame = new JSFrame();
const frame = jsFrame.create({
    title: 'Оптимизация',
    left: 20, top: 20, width: 320, height: 220,
    movable: true,
    resizable: true,
    html: '<div id="my_element" style="padding:10px;font-size:12px;color:darkgray;">Если сайт выглядит плохо/некорректно, используйте сочитание клавиш Ctrl+Shift+ -/+, чтобы менять размер экрана.</div>',
});


function ShowClue() {
  frame.show();
}


document.addEventListener("DOMContentLoaded", function() {
  const loadingProgress = document.querySelector(".loading-progress");
  const percentText = document.getElementById("percent");

  let percent = 0;
  const interval = setInterval(function() {
      percent++;
      loadingProgress.style.width = percent + "%";
      percentText.textContent = percent + "%";

      if (percent >= 100) {
          clearInterval(interval);
          setTimeout(function() {
              document.getElementById("loader").style.display = "none";
              document.getElementById("content").style.display = "block";
          }, 100);
      }
  }, 15);
});
