const Task=require("../models/Task");
const getPaginate=require("../libs/getPaginate")
module.exports={
    getTasks:async (req,res)=>{
        const {page,size,title}=req.query;
        condition=title?{
            title:{$regex: new RegExp(title), $options:"i"}
        }:{}
        const {limit,offset}= getPaginate(page,size)
        const data=await Task.paginate(condition,{offset,limit});
        res.json({
            totalItems:data.totalDocs,
            tasks:data.docs,
            totalPages:data.totalPages,
            currentPages:data.page-1

        });
     },
    postTasks:async (req,res)=>{
        const newTask=new Task({title:req.body.title,description:req.body.description,done:req.body.done || false});
        const taskSaved=await newTask.save();
        res.json(taskSaved);
    },
    getOneTask:async(req,res)=>{
        const oneTask=await Task.findById(req.params.id);
        res.json(oneTask);
    },
    deleteTask:async (req,res)=>{
        const deleteTask=await Task.findByIdAndDelete(req.params.id);
        res.json({"message":"Succesfully deleted"})
    },
    findAllDoneTask:async (req,res)=>{
        const task=await Task.find({"done":true});
        res.json(task);
    },
    updateTask:async (req,res)=>{
        const update=await Task.findByIdAndUpdate(req.params.id,req.body);
        res.json({"message":"Task Successfully Updated"}); 
    }
}