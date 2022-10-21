const Todo = require('../models/Todo')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = class PostControoler{

    // Get
    static async getAll(req, res){
        const sortFilter = req.query.sort
        const searchDesc = req.query.description__regex

        //const regexSrc = new RegExp(searchDesc.trim())

        const todos = searchDesc ? 
            await Todo.find({description: {$regex: searchDesc}}).sort(sortFilter)
            :await Todo.find().sort(sortFilter)

        res.status(200).json({ todos: todos,})
    }

    static async getById(req, res){
        const id = req.params.id

        if(!ObjectId.isValid(id)){
            return res.status(422).json({msg: "Invalid ID!"})
        }

        const todo = await Todo.findById(id)

        if(!todo){
            return res.status(422).json({msg: 'Todo not found!'})
        }

        res.status(200).json({todo})
    }

    // Post
    static async register(req, res){
        const description = req.body.description
        const done = req.body.done

        if(!description){
            return res.status(422).json({msg: 'Description is required'})
        }

        const todo = new Todo({
            description,
            done: false,
        })

        try{
            const newTodo = await todo.save()
            res.status(200).json({todo: newTodo})
        } catch(err){
            res.status(500).json({msg: err})
        }
    }

    // Put
    static async editTodo(req, res){
        const id = req.params.id
        const description = req.body.description
        const done = req.body.done

        if(!ObjectId.isValid(id)){
            return res.status(422).json({msg: "Invalid ID!"})
        }

        const todo = await Todo.findById(id)

        if(!todo){
            return res.status(422).json({msg: 'Todo not found!'})
        }

        todo.description = description
        todo.done = done

        try{
            const updatedTodo = await Todo.findOneAndUpdate(
                { _id: todo._id },
                { $set: todo},
                { new: true },
            )

            res.status(200).json({
                msg: "Todo Updated",
                data: todo,
            })

        } catch(err){
            res.status(500).json({msg: err})
        }

    }

    // Delete
    static async deleteTodo(req, res){
        const id = req.params.id

        if(!ObjectId.isValid(id)){
            return res.status(422).json({msg: "Invalid ID!"})
        }

        const todo = await Todo.findById(id)

        if(!todo){
            return res.status(422).json({msg: 'Todo not found!'})
        }

        try{
            await Todo.deleteOne({ _id: id})
            res.status(200).json({msg: 'Todo deleted!'})
        } catch(err){
            res.status(500).json({msg: err})
        }

    }

}