let link= "http://universities.hipolabs.com/search?country=rwanda";
// fetch(link).then(function(res){
//     return(res.json());
// }).then(function(myjson){
//     console.log(myjson.map(({name,country})=>({name,country})))
// })
async function university(){
    await fetch(link).then(async function(res){
        return await res.json();
    }).then(function(myjson){
        console.log(myjson.map(({name})=>name));
    })
}
university();