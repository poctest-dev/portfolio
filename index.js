const express=require('express')
const bodyParser = require('body-parser')
const app=express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static('public'));


app.get('/home', (req,res)=>{
 
    res.render('index.ejs')
})


app.listen(4000, ()=>{
    console.log('server listening on port 4000')
})