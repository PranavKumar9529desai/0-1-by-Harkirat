function counter (){
    let num=0;
    setInterval(()=>{
        console.log(num);
        num++;
    },1000);
}

counter();
