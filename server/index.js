const express=require('express')
const cors=require('cors')
const app=express();
app.use(cors());
const {body,validationResult}=require('express-validator');

const fs=require('fs');
const moviesdata=fs.readFileSync('./movielist.json')
const movies=JSON.parse(moviesdata);
app.get('/movielist',(req,res)=>{
    res.json(movies)
})

app.post('/create', body('name').isLength({min:3})),
body('rating').isInt({min:2,max:5}),
(req,res)=>{
    const errors=validationResult(req);
    res.send('movie created successfully')
}
app.listen(8000,()=>{
    console.log('server is running now')
})