const app=require("./app");
const db=require("./database");
//Listeners
app.listen(app.get("port"),()=>{
    console.log("Server on port",app.get("port"));
})