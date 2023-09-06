//in normal javascript
let promise= new Promise(function(resolve, reject){

});

// when using internet expoler use Qlibrary
let promise = Q.Promise(function(resolve, reject){

})

//when using angular
let promise = $q(function(resolve, reject){

})

//Ajax request in jquery
let promise= $.get('/foo/bar/common')

//Ajax request in Angular
let promise = $http.get('/foo/bar/common')

//$timeout service in Angular
let promise = $timeout(function(){
    console.log('test')
},1000)