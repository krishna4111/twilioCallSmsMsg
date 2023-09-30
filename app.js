const express=require('express');
const app=express();
const sequelize=require('./util/database');
const cors=require('cors');
const messageRoute=require('./router/messagerouter');
const bodyparser=require('body-parser');

app.use(bodyparser.json());
app.use(cors());
app.use('/whatsApp',messageRoute);

sequelize.sync()
.then((result)=>{
    app.listen(5000);
})
.catch((err)=>{
    console.log(err);
})