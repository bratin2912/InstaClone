const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port=8000 || process.env.PORT;
dotenv.config()

// connection to mongoDB database with mongoose
console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Connected to database");
})
.catch(()=>{
    console.log("Connection failed")
})

app.listen(port,()=>{
    console.log("Server is running")
})