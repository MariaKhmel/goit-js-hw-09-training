import Notiflix from 'notiflix';



const createPromiseBtn = document.querySelector('button[type="submit"]');
const form = document.querySelector('.form')



form.addEventListener('submit', onCreatePromiseBtnClick)

function onCreatePromiseBtnClick(e) {

  let delay = Number(document.querySelector('input[name="delay"]').value);
  const step = Number(document.querySelector('input[name="step"]').value);
  const amount = Number(document.querySelector('input[name="amount"]').value);

  e.preventDefault();

  for (let i = 1; i <= amount; i += 1){
      createPromise(i, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    
    delay += step;

    }

  
}



function createPromise(position, delay) {

  console.log(position, delay);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
}, delay) 
  })
}


