function update(){
    let update_after_1_sec = 0;
    let update_after_2_sec = 0;
    let update_after_4_sec = 0;

    setInterval(() => {
        console.log(update_after_4_sec, update_after_2_sec, update_after_1_sec);
        update_after_1_sec++;
    }, 1000);

    setInterval(() => {
        update_after_2_sec++;
    }, 2000);

    setInterval(() => {
        update_after_4_sec++;
    }, 4000);
}

update();
