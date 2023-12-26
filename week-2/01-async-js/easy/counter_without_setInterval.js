let num = 0;

function Myfun() {
    console.log(num);
    num++;
    setTimeout(Myfun, 1000);
}

setTimeout(Myfun, 1000);
