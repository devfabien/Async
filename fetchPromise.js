function get(url){
    return fetch(url,{method:'get'})
};

function getJSON(url){
    return get(url).then(function(response){
         return response.json();
    })
}


