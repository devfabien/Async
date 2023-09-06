function job(callback1, callback2) {
    let count=0;
    setTimeout(() => callback1(),2000);
 

const timer=setInterval(()=> {
    callback2()
    count++;
    if(count ==3){
        clearInterval(timer);  
      
    }
},1000)
    
}
job()

