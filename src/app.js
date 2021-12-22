const express=require("express");
const morgan=require("morgan");
const cors=require("cors");
const routes=require("./routes/task-routes");
const app=express();
//Settings
app.set("port",4000);
app.set("json spaces",4)
//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.get("/",(req,res)=>{
    res.send("Hello world!");
})
app.use("/api/tasks",routes);

module.exports=app;