const express  = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 4000;  
//takes port value in .env file , if there is none in .env than takes default 4000


app.use(express.json());
// middleware to parse json request body


const todoRoutes = require('./routes/todos.js');

app.use('/api/v1',todoRoutes);
//when hitting /api/v1 calls todoRoutes



app.listen(PORT ,()=>{
    console.log('server started at ',PORT);
})

const dbConnect = require('./config/database.js')
dbConnect();

//default route
app.get('/', (req,res)=>{ 
    res.send('This is home page.') 
})