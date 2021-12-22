require("dotenv").config();

module.exports={
    mongodbURL:process.env.MONGO_URI || "mongodb://localhost/taskdb"
}