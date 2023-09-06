// setTimeout(function() {
//     console.log('I am an asynchronous message');
// }, 0);

// console.log('I am a synchronous message');

setTimeout(function() {
    console.log('I am an asynchronous message');
}); // You can omit the 0

console.log('Test 1');

for (let i = 0; i < 10000; ++i) {
    doSomeStuff();
}

console.log('Test 2');

// The 'I am an asynchronous message' will be displayed when the main thread reach here

function doSomeStuff() {
    return 1 + 1;
}

// timeout inside a promise

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello world');
    }, 2000);
});

promise.then(function(data) {
    console.log(data);
});



///chaning multiple .then()

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello world');
    }, 2000);
});

promise.then(function(data) {
    console.log(data + ' 1');
});

promise.then(function(data) {
    console.log(data + ' 2');
});

promise.then(function(data) {
    console.log(data + ' 3');
});

/* The reject function is used to trigger an error. When you use then, you can give 2 functions. The first 
function is used when the promise exits successfully. The second function is used when the promise encounters an error. */


var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('We are all going to die');
    }, 2000);
});

promise.then(function success(data) { 
    console.log("resolved",data);
},function error(data){
    console.error(data)
})


//You can still bind multiple then methods:

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('We are all going to die');
    }, 2000);
});
promise.then(function success(data) {
    console.log(data + ' 1');
}, function error(data) {
    console.error(data + ' 1');
});

promise.then(function success(data) {
    console.log(data + ' 2');
}, function error(data) {
    console.error(data + ' 2');
});
promise.then(function success(data) {
    console.log(data + ' 3');
}, function error(data) {
    console.error(data + ' 3');
});


///You can call resolve and reject multiple times, but this is useless. Once a promise is finished, it can't restart.

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello world 1');
        resolve('hello world 2');
        resolve('hello world 3');
        resolve('hello world 4');
    }, 1000);
});

promise.then(function success(data) {
    console.log(data);
});



// promise written in another way

function job() {
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("hello world")
        },2000)
    })
}
job().then((data)=>{
console.log(data)
})

module.exports = job;