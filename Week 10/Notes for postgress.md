## What are different types of the databases? 
1) sql database : fixed schema much strict
2) Schemaless : not have a fixed schema 
3) vector database : they store vectors (made from the embedddng)
    these database are really usefull whne doing the ai application like chat with pdf.

## Why we need the sql database as we do have the strictness provided by the mongoose 

-> strictness provided by the mongoose in only upto to the node js level. it very easy to put the erroronus data in the database.


# if if want change the schema in sql type database you migth need to use the "Migration" .


## how to run the postgress in the docker container locally ?

--->  download the image run the container via gui or cli .
---> Connect to the PostgreSQL instance:


### command first 
docker run --name my-postgres1 -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
9b7eb202445b3ce3ff004a619f4ba229b8cda3d2b45f5eaf1ab245adae121c9b

### commnada second 
PS C:\Users\dpran\Desktop\Week 10\Postgress> docker exec -it my-postgres1 psql -U postgres 
 
psql (16.2 (Debian 16.2-1.pgdg120+2))
Type "help" for help.

postgres=# //dt


### We use orm like pg which let the node talk to the database like the postgress.
