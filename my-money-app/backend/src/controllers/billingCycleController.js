const BillingCycle = require('../models/billingCycle')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = class BillingCycleController{

    // Get
    static async getAll(req, res){
        const sortFilter = req.query.sort
        const skip = req.query.skip
        const limit = req.query.limit
        const searchName = req.query.name__regex

        //const regexSrc = new RegExp(searchName.trim())

        const billingCycles = searchName ? 
            await BillingCycle.find({name: {$regex: searchName}}).sort(sortFilter).skip(skip).limit(limit)
            :await BillingCycle.find().sort(sortFilter).skip(skip).limit(limit)

        res.status(200).json({ billingCycles })
    }

    static async getById(req, res){
        const id = req.params.id

        if(!ObjectId.isValid(id)){
            return res.status(422).json({msg: "Invalid ID!"})
        }

        const billingCycle = await BillingCycle.findById(id)

        if(!billingCycle){
            return res.status(422).json({msg: 'BillingCycle not found!'})
        }

        res.status(200).json({billingCycle})
    }

    static async countBillingCycles(req, res){
        try{
            const value = await BillingCycle.find().count()
            
            res.status(200).json({value})
        } catch (error){
            res.status(500).json({errors: [error]})
        }
    }

    static async summaryBillingCycles(req, res){
        try{
            const result = await BillingCycle.aggregate([{
                $project: {credit: {$sum: "credits.value"}, debt: {$sum: "debts.value"}}
            },{
                $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
            },{
                $project: {_id: 0, credit:1, debt:1}
            }])

            res.status(200).json(result[0] || {credit: 0, debt: 0})
        } catch (error){
            res.status(500).json({errors: [error]})
        }
    }

    // Post
    static async register(req, res){
        const name = req.body.name
        const month = req.body.month
        const year = req.body.year
        const credits = req.body.credits
        const debts = req.body.debts

        if(!name){
            return res.status(422).json({msg: 'Name is required'})
        }

        if(!month){
            return res.status(422).json({msg: 'Month is required'})
        }

        if(!year){
            return res.status(422).json({msg: 'Year is required'})
        }

        const billingCycle = new BillingCycle({
            name,
            month,
            year,
            credits,
            debts
        })

        try{
            const newBillingCycle = await billingCycle.save()
            res.status(200).json({billingCycle: newBillingCycle})
        } catch(err){
            res.status(500).json({msg: err})
        }
    }

    // Put
    static async edit(req, res){
        const id = req.params.id
        const name = req.body.name
        const month = req.body.month
        const year = req.body.year
        const credits = req.body.credits
        const debts = req.body.debts


        if(!ObjectId.isValid(id)){
            return res.status(422).json({msg: "Invalid ID!"})
        }

        const billingCycle = await BillingCycle.findById(id)

        if(!billingCycle){
            return res.status(422).json({msg: 'BillingCycle not found!'})
        }

        billingCycle.name = name
        billingCycle.month = month
        billingCycle.year = year
        billingCycle.credits = credits
        billingCycle.debts = debts

        try{
            const updatedBillingCycle = await BillingCycle.findOneAndUpdate(
                { _id: billingCycle._id },
                { $set: billingCycle},
                { new: true, runValidators: true },
            )

            res.status(200).json({
                msg: "BillingCycle Updated",
                billingCycle,
            })

        } catch(err){
            res.status(500).json({msg: err})
        }

    }

    // Delete
    static async delete(req, res){
        const id = req.params.id

        if(!ObjectId.isValid(id)){
            return res.status(422).json({msg: "Invalid ID!"})
        }

        const billingCycle = await BillingCycle.findById(id)

        if(!billingCycle){
            return res.status(422).json({msg: 'BillingCycle not found!'})
        }

        try{
            await BillingCycle.deleteOne({ _id: id})
            res.status(200).json({msg: 'BillingCycle deleted!'})
        } catch(err){
            res.status(500).json({msg: err})
        }

    }

}

