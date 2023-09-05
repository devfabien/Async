let link= "https://api.publicapis.org/entries";
fetch(link).then(function(res){
    return(res.json());
}).then(function(myjson){
    console.log(JSON.stringify(myjson))
})