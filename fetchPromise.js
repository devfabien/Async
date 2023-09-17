function get(url){
    return fetch(url,{method:'get'})
};

async function getJSON(url){
    return await get(url).then(function(response){
         return response.json();
    })
}

getJSON('https://jsonplaceholder.typicode.com/users').then(function(response){
    console.log(response)
}).catch(function(error){
    console.log('unknown')
})
