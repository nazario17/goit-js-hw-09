import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const buttonStart = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]')
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');


let chosenTime = null
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        chosenTime = selectedDates[0];
        if (options.defaultDate > chosenTime) { 
            buttonStart.setAttribute('disabled', 'disabled')
            Notify.warning('Please choose a date in the future');
            return;
        } 
        if (options.defaultDate < chosenTime) { 
            buttonStart.removeAttribute('disabled', 'disabled');
        }
    }
}

flatpickr('input#datetime-picker', options);
buttonStart.addEventListener('click', startTimer)

function startTimer() { 
    setInterval(() => { 
        const currentTime = new Date();
        const differenceTime = chosenTime - currentTime; 
        const resultTime = convertMs(differenceTime)


        days.textContent = addPadStartZero(resultTime.days);
        hours.textContent = addPadStartZero(resultTime.hours);
        minutes.textContent = addPadStartZero(resultTime.minutes);
        seconds.textContent = addPadStartZero(resultTime.seconds);
        
    }, 1000)
}


function addPadStartZero(value) { 
    return value.toString().padStart(2, '0')
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}