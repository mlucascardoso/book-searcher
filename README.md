# api-generator-cli skeleton
A skeleton that will be used on api-generator-cli

-- sequelize
npx sequelize-cli init
npx sequelize-cli model:generate --name books --attributes authorId:integer,publishingCompaniesId:integer,languageId:integer,title:string,isbn:string,year:date,weight:float,length:float,width:float,height:float
npx sequelize-cli model:generate --name languages --attributes language:string
npx sequelize-cli model:generate --name authors --attributes name:string
npx sequelize-cli model:generate --name publishingCompanies --attributes name:string


, {
      indexes: [
        {fields: ['title']},
        {fields: ['isbn']},
        {fields: ['year']},
        {fields: ['weight']},
        {fields: ['width']},
        {fields: ['length']},
      ]
    }