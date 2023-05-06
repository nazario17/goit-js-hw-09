const buttonStartEl = document.querySelector('button[data-start]');
const buttonStopEl = document.querySelector('button[data-stop]');


buttonStartEl.addEventListener('click', startChangingColor)
buttonStopEl.addEventListener('click', stopChangingColor)
let timerId = null



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function startChangingColor() { 
    document.body.style.backgroundColor = getRandomHexColor();
    timerId = setInterval(() => { 
        document.body.style.backgroundColor = getRandomHexColor()
    }, 1000)

    if (timerId) { 
        buttonStartEl.setAttribute('disabled', 'disabled')
        buttonStopEl.removeAttribute('disabled', 'disabled');
    }

}


function stopChangingColor() { 
    clearInterval(timerId);
    buttonStartEl.removeAttribute('disabled', 'disabled');
    buttonStopEl.startAttribute('disabled', 'disabled');
}


// const buttonStartEl = document.querySelector('button[data-start]');
// const buttonStopEl = document.querySelector('button[data-stop]');

// buttonStartEl.addEventListener('click', changeBodyColor);
// buttonStopEl.addEventListener('click', stopChangingBodyColor);
// let timerId = null;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// function changeBodyColor() {
//   document.body.style.backgroundColor = getRandomHexColor();
//   timerId = setInterval(() => {
//     document.body.style.backgroundColor = getRandomHexColor();
//   }, 1000);

//   if (timerId) {
//     buttonStartEl.setAttribute('disabled', 'disabled');
//     buttonStopEl.removeAttribute('disabled', 'disabled');
//     return;
//   }
// }
// function stopChangingBodyColor() {
//   buttonStartEl.removeAttribute('disabled', 'disabled');
//   clearInterval(timerId);
//   buttonStopEl.setAttribute('disabled', 'disabled');
// }