const breakFast= new Promise(function(resolve,reject){
    let galgic=true;
    if(galgic==false) resolve(" you can cook noodles");
    reject("you can toast bread")
});
breakFast.then((message)=>{
console.log(`Resolved: ${message}`);
return "wow";
}
).catch((message)=>console.log(`Rejected: ${message}`))

//error handling with then

breakFast.then((message)=>{
    console.log(`Resolved: ${message}`);
    return "wow";
    }
    ).then(undefined,(message)=>console.log(`Rejected: ${message}`))

//chaning .thens


breakFast.then((message)=>{
    console.log(`Resolved: ${message}`);
    return "wow";
    }
    ).catch((message)=>console.log(`Rejected: ${message}`))
    .then((message)=>console.log(message.length))