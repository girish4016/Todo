const Todo = require ("../models/Todo")

const CreateTodo = async(req,res)=>{

    try{

        const {title,description} = req.body;
        
        const response = await Todo.create({title,description});

        // send a json response with success flag
        res.status(201).json(
            {
                success:true,
                data:response,
                message:"Entry created Succesfully"
            }
        )

    }
    catch (err) {

        console.error(err);
        console.log(err);

        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:err.message
            }
        )

    }

}


module.exports = CreateTodo;