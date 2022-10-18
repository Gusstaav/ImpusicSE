const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let channel = models.channel;
let commemts = models.commemts;
let follows = models.follows;
let videos = models.videos;

app.post('/login', async (req,res)=>{
    let response = await channel.findOne('channel'[{
        where:{email:req.body.email, password:req.body.password}
    }]);
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
    
})

app.post('/cadastro',async (req,res)=>{ 

    let response = await channel.bulkCreate([
        { name: req.body.name, email: req.body.email, password: req.body.password },
      ]);
      if(response === null){
        res.send(JSON.stringify('error'));
      }else{
        res.send(response)
      }
      
    

})
let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor rodando')
})