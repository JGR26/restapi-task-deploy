const {mongodbURL}=require("./config")
const mongoose=require("mongoose");
(async ()=>{
    try{
        const db =await mongoose.connect(mongodbURL,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log("Database is connected to: ",db.connection.name);
    }catch(e){
        console.error(e);
    }
})();
