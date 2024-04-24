# what are ORM : 
  
  ORM stands for the Object Reltionship Mapping.

  basically ORM let's you talk to your database in more easy/efficent manner without woring too much about the syntax. 

  ORM conver the object mapped code into database query underhood.


# Why ORM ? 
   
   1) Much Simplar and cleaner Syntax 
   2) If you want to change the database  you don't need to change the code simply change the ORM.
       ---->this is possible because the ORM provides a unified API to interact with the database. This API remains the same irrespective of the type of database used.
   3) Type safety and Auto completion.
   4) Automatic Migrations 
       ---> : You just need to update your application's data models, and the ORM takes care of updating the database schema.


# What is Prisma ? 

  Prisma is ORM compatiable with the both TypeScript and Node.js 

1) Data Model : 
    you define Schema in single file. what it look like , how many table are their , what kind of reltionship they have , how the rows are connected to each other.

2) Automatic Migrations : 
    As you know it's pretty hectic to change database schema in postgress you need to write alter commands which can get complex .
    but Prisma takes care of it as it automatically handles Model changes and modifies the database based on updated Schemas.

# command to installl Prisma :

 npm install prisma typescript ts-node @types/node --save-dev
    ---> dependencies to use ORM in typeScript.

 npx prisma  
--->install Prisma

# command to perform the migration 
   npx prisma migrate dev --name Initialize the schema

Highly import notes 
 prisma will automatically create .env file which has the url to connect with the database(DBurl) modify the DBURL in write format.
   

   here ex.
    1)  DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres?schema=public"


why the extra table is created when using Prisma Migraions 
 -->When you make changes to your Prisma data model and run prisma migrate, Prisma generates SQL migration files and applies them to your database. The _prisma_migrations table is used to store metadata about these migrations, such as the name of the migration, when it was applied, and the snapshot of the Prisma schema at the time of the migration.

 # what are the Prisma clients ?
 --> Prisma Client is an auto-generated and type-safe query builder for Node.js and TypeScript that's tailored to your database schema. It is part of the Prisma ecosystem, which includes Prisma Client, Prisma Studio, and Prisma Migrate.

 basically it's knows the your database schemas so prisma clients makes it easier to write the insert/delete/update queries.


 # How to generate the client?
  npx prisma generate
   
This generates a new client  for you.


# Their are many types of reltionship 
1) one to one 
2) one to many 
3) Many to One 
4) Many to Many 

## how to define the reltionships in the Presima 

user User @relation(fields: [userid], references: [id])