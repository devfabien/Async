function job(callback1, callback2) {
  
    setTimeout(() => callback1(),2000);
 

const timer=setInterval(()=> {
    callback2()
},1000)
    
}
job()

