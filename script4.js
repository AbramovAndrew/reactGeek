
let promiseArray = [];
const url = 'https://jsonplaceholder.typicode.com/users/';

// var. 1
//
for (let i = 0; i < 10; i++) {
    promiseArray[i] = new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url + (i + 1));
        xhr.onload = () => resolve(xhr.response);
        xhr.onerror = function(){
            reject(new Error('network request failed'));
        };
        xhr.send();
    });
}

Promise.all(promiseArray).then(result => console.log(result));


// var. 2

// for (let i = 0; i < 10; i++) {
//     promiseArray[i] = fetch(url + (i + 1)).then(response => response.text());
// }
//
// Promise.all(promiseArray).then(result => console.log(result));


// var. 3
//
// for (let i = 0; i < 10; i++) {
//     promiseArray[i] = fetch(url + (i + 1));
// }
//
// Promise.all(promiseArray)
//     .then(responses => responses.map(response => response.text()))
//     .then(res => Promise.all(res).then(result => console.log(result)));
