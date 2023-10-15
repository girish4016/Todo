const Todo = require('../models/Todo')


//put type request

const updateTodo = async (req,res)=>{
    try{

        const {title,description} = req.body;
        const updatedAt = Date.now()
        const id = req.params.id
        
        const response = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt}
        );

        // send a json response with success flag
        res.status(202).json(
            {
                success:true,
                data:response,
                message:"Updated created Succesfully"
            }
        )

    }
    catch (err) {

        console.error(err);
        console.log(err);

        res.status(500).json(
            {
                success:false,
                data:"Error in updating data",
                message:err.message
            }
        )

    }
}

module.exports = updateTodo;