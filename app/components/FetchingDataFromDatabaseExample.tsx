/* Fetching Data from Database:- Untill now we have learned at how to fetch data from API endpoints using the Fetch API.
-> In this section we will learn fetching data from a database from a server component.
Two key reasons why fetching data directly from a databse is powerful
1. server components have direct access to server-side resources, which makes database interactions seamless.
2. since everything happens on the server, we don't need API routes or worry about exposing sensitive information 
to the client.

-> to understand how to fetch data from databse we are going to be working with two 
super powerful tools- SQLite and Prisma.

SQLite:- 
-> SQLite is a simple, filebased database to store information in your project
-> It doesn't require a server or a complex setup and its perfect for learning and prototyping

Prisma:-
-> Primsa is a tool that makes it really easy to talk to your database.
-> It's like a translator that helps your code communicate with SQLite

Setup:-

step1: install prisma cli as a  dev dependency.
npm install prisma -D

step2:- initilize prisma with SQLite
npx prisma init --datasource-provider sqlite 
it creates prisma directory with schema.prisma file.
step3: then update database url to file:app.db like below in schema.prisma
datasource db {
  provider = "sqlite"
  url = "file:app.db"
}

step4: add database file to gitignore file
 step5: add product model in schema.prisma model represent the table in database and Product is 
 the table and id, and description is optional
 title etc are column.
 model Product {
  id    Int   @id @default(autoIncrement())
  title string
  price Int
  description String?
}
step6:- to create database table from prisma schema use 
npx prisma migrate dev --name init
the above command does three things
1.creates  migration file in prisma/migrations executes the migration againts your database.
installs prisma client package and generates clinet which will interact with your database.
now the database and tables are ready, now define our database operations.
install primsa client using below commands
npm install prisma --save-dev
npm install @prisma/client

-> create prisma-db.ts file for CRUD operations.
-> create Product-db folder with page.tsx file
-> since server components run on the server we can directly talk to database without need of an API.
-> see product-db/page.tsx and prisma/schema.prisma files and prisma-db.ts files.
*/