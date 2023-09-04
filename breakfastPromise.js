const breakFast= new Promise(function(resolve,reject){
    let galgic=true;
    if(galgic==false) resolve(" you can cook noodles");
    reject("you can toast bread")
});
breakFast.then((message)=>
    console.log(`Resolved: ${message}`)
).catch((message)=>console.log(`Rejected: ${message}`))