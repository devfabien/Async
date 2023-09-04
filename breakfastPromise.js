const breakFast= new Promise(function(resolve,reject){
    let galgic=true;
    if(galgic==true) resolve(" you can cook noodles");
    reject("you can toast bread")
});
breakFast.then((message)=>{
console.log(`Resolved: ${message}`);
return "wow";
}
).catch((message)=>console.log(`Rejected: ${message}`))
.then((message)=>console.log(message.length))