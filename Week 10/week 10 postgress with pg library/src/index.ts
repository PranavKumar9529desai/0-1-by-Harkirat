const { Client } = require('pg');


const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'mysecretpassword',
});

async function createTable() {

  

  try {
    await client.connect();
    const createTableQuery = `
    CREATE TABLE addresses (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL,
      city VARCHAR(100) NOT NULL,
      country VARCHAR(100) NOT NULL,
      street VARCHAR(255) NOT NULL,
      pincode VARCHAR(20),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );`;
   const result =  await client.query(createTableQuery);
   console.log(result);

  } catch (error) {
    console.log(error);

  }
  finally{
    await client.end();
  }
}

// createTable();



async function InsertAdress(){
  console.log('function ran');
  try {
    await client.connect();
    const Insertquery = "INSERT INTO addresses VALUES ($1,$2,$3,$4,$5,$6)";
    const res = await client.query(Insertquery,[1,2,'karad','india','Mangalwar Peth',415110]);
    console.log(res);
  } catch (error) {
    console.log(error)
  }
  finally{
    await client.end();
  }
};

InsertAdress();



