import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
};

refs.form.addEventListener('submit', showResults);

function showResults(e) {
  e.preventDefault()
  let delay = Number(refs.inputDelay.value)
  const step = Number(refs.inputStep.value)

  for (let i = 1; i <= Number(refs.inputAmount.value); i += 1) { 
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`Fullfilled promise ${position} in ${delay}`)
      })
      .catch(({ position, delay }) => { 
        Notify.failure(`Rejected promise ${position} in ${delay}`)
      })
    
    delay += step;
  }
}


function createPromise(position, delay) {
  const obj = { position, delay };
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      if (shouldResolve) {
        resolve(obj)
      } else { 
        reject(obj)
      }
    }, delay)
  })
}
