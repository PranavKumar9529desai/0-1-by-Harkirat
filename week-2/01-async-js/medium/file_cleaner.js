const fs = require('fs');

function Myfun(){
    fs.readFile('1-file-cleaner.md', 'utf-8', (error, data) => {
        if (error) throw error;
        let read_data = data;
        let trimmed_data = read_data.replace(/\s+/g, " ").trim();
        // (/\s+/g, " ")  is  known as regx(used for pattern matching) 
        //    '/   /'   indicates the startign and end of the regex ;
        //    \\s is used tell white spaces 
        //    g flaf tell it should applied golbally.
        console.log(trimmed_data);
    })
}

Myfun();