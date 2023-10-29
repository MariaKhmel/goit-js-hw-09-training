// const shop = {

//     items: [],
    
//     addNewItem(newItem) {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 const item = { item: newItem, createdAt: Date.now() };
//                 this.items.push(item);
//                 resolve(item)
//             }, 3000)
//         })
//     }
        



// }

// shop.addNewItem(60).then(itemValue => console.log(itemValue)).catch(error => console.log(error));

// const promise = Promise.resolve(345);

// promise.then(value => console.log(value));

const makePromise = value => {
    return new Promise(resolve => {
        resolve(value);
    })
}

for (i = 0; i <= 5; i+=1){
    makePromise(i).then(console.log);
}