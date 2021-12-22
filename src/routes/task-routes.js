const {Router}=require("express");
const router=Router();
const {getTasks,postTasks,getOneTask,deleteTask,findAllDoneTask,updateTask}=require("../controllers/task-controllers")
router.get("/",getTasks);
router.post("/",postTasks);
router.get("/done",findAllDoneTask);
router.get("/:id",getOneTask);
router.delete("/:id",deleteTask);
router.put("/:id",updateTask);
module.exports=router;