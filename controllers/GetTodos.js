
const Todo = require('../models/Todo')

const GetAllTodos = async (req,res)=>{
    try{

        const todos = await Todo.find({});
        res.status(200).json(
            {
                success:true,
                message:'entire data fetched',
                data:todos
            }
        )

    }
    catch(err){
        console.log(err)
        res.status(500).json(
            {
                status:false,
                data:'data fetch failed',
                message:err.message
            }
        )
    }
}

const GetTodo = async (req,res)=>{
    try{

        const id = req.params.id


        const todos = await Todo.findById({_id: id});

        if(!todos){
            req.status(404).json(
                {
                    success:false,
                    message:'data with given id not found'
                }
            )
        }

        res.status(200).json(
            {
                success:true,
                message:`todo ${id} data fetched`,
                data:todos
            }
        )

    }
    catch(err){
        console.log(err)
        res.status(500).json(
            {
                status:false,
                data:'data fetch failed',
                message:err.message
            }
        )
    }
}

module.exports = {GetAllTodos,GetTodo};