const todo = require('../models/Todo')

const DeleteTodo = async (req,res)=>{
    const id = req.params.id;
    try{
        await todo.findByIdAndDelete({_id:id});
        res.status(204).json(
            {
                success:true,
                message:"deleted succesfully",
            }
        )
    }
    catch(err){
        res.status('404').json(
            {
                success:false,
                message:err.message
            }
        )
    }
}
module.exports = DeleteTodo;