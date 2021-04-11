import Trello from '../models/trello.js'

export const addTodoList =async(req,res)=>{
    Trello.create(
        req.body,(err, user) => {
            res.status(200).send(user)
        }
    )
}

export const deleteList =async(req,res)=>{
    try {
        Trello.findByIdAndDelete({_id:req.params.id},
       (err,result)=>{
            res.status(200).send(result)  
      })
    }
       catch {
        res.status(404).send(err)
      }
}

export const updateList =async(req,res)=>{
    try {
        Trello.findByIdAndUpdate(req.body._id,{
            title:req.body.title
        },
       (err,result)=>{
            res.status(200).send(result)  
      })
    }
       catch {
        res.status(404).send(err)
      }
}

export const addTodoCards =async(req,res)=>{
    const id=req.params.id
    try {
        Trello.findByIdAndUpdate(id,
        {$push: {"cards": req.body}},
        {new: true,upsert:true},(err,data)=>{
            res.status(200).send({data:data}) 
      })
      } catch {
        res.status(404).send(err)
      }
}

export const deleteCards =async(req,res)=>{
    try {
        Trello.findOneAndUpdate({'cards._id':req.params.id},
        {$pull:{cards:{_id:req.params.id}}},{ safe: true },
       (err,result)=>{
            res.status(200).send({data:result})  
      })
    }
       catch {
        res.status(404).send(err)
      }
}

export const updateCards =async(req,res)=>{
    try {
        Trello.findOneAndUpdate({'cards._id':req.body._id},
         {$set: {'cards.$.text': req.body.text}},
        {new: true},(err,result)=>{
            res.status(200).send({data:result}) 
      })
    }
       catch {
        res.status(404).send(err)
      }
}