const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL ,{  
        useNewUrlParser:true,
        UseUnifiedTopology:true
    })
    .then( ()=>{ console.log('db connection succesful')} )
    .catch( (error)=>{ 
        console.log('Issues in connecting DB')
        console.error(error.message) 
        process.exit(1)

    })
}
module.exports = dbConnect;