const fs = require('fs');

function Myfun(){
    fs.readFile('3-read-from-file.md', 'utf-8' , (error , data)=>{
       if (error) throw error;
       console.log(data);
    })
}

Myfun();