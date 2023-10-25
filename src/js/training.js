import '../css/common.css'


/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

// const promise = new Promise((resolve, reject) => {
//     const canFulfill = Math.random() > 0.5;
// console.log(canFulfill);
//     setTimeout(() => {
//         if (canFulfill) {
//             resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
//         }

//         reject('Промис выполнился с ошибкой (отклонён, rejected)');
//     }, 1000);
// });


// promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//     console.log('onFulfilled -> onFulfilled');
//     console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//     console.log('onRejected -> onRejected');
//     console.log(`❌ ${error}`);
// }



/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

// promise
//     .then(onFulfilled)
//     .then(x => {
//         console.log(`the value of x - ${x}`);

//         return 10;
//     })
//     .then(y => {
//         console.log(y);
//     })
//     .catch(error => console.log(error))
//     .finally(() => console.log('Я буду выполнен в любом случае'));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// const makeOrder = dish => {
//   const DELAY = 5000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ Вот ваш заказ: ${dish}`);
//       }

//       reject('❌ Упс, у нас закончились продукты');
//     }, DELAY);
//   });
// };

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabiscuit',
];

let raceCounter = 0;
const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
raceCounter += 1;
    const promises = horses.map(item => run(item));
    console.log(promises);
updateWinnerField('');
updateProgressField('🤖 Заезд начался, ставки не принимаются!');
determineWinner(promises);
    waitForAll(promises);
}

function determineWinner(horsesP) {
    
    Promise.race(horsesP).then(({ horse, time }) => {
        updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time}
    времени`);
        // updateResultsTable({ horse, time, raceCounter });
    });
}


function waitForAll(horsesP) {
    Promise.all(horsesP).then((horse) => {
        horse.forEach(({horse,time}) => {
            updateResultsTable({ horse, time, raceCounter });
       })
        // updateResultsTable({ horse, time, raceCounter });
        updateProgressField('📝 Заезд окончен, принимаются ставки.');
    });
}



function updateWinnerField(message) {
    refs.winnerField.textContent = message;
}

function updateProgressField(message) {
    refs.progressField.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
    const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
    refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */

/*
 * Promise.all([]) для ожидания всех промисов
 */

function run(horse) {
    return new Promise(resolve => {
        const time = getRandomTime(2000, 3500);

        setTimeout(() => {
            resolve({ horse, time });
        }, time);
    });
}

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
