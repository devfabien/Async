function get(url){
    return fetch(url,{method:'get'})
};

async function getJSON(url){
    return await get(url).then(function(response){
         return response.json();
    })
}


