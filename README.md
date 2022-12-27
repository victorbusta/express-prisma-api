# api_builder

build project from scratch :

> mkdir api_builder<br>
cd api_builder<br>
npm init -y<br>
npm i prisma express typescript compression helmet cors ts-node @types/node @prisma/client --save-dev

init typescript :
`
> npx tsc --init 

init prisma :

> npx prisma<br>
npx prisma init

check `./.env` file for data base infos (connexion to postgres db) :

> DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"

check datasource db in `./prisma/schema.prisma` and create database schema

once that is done, make the migration :

>npx prisma migrate dev --name init


