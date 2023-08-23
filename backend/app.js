const express=require("express")
const mongoose=require("mongoose")
const router=require("./routes/book-routes")
const app=express();
const cors=require('cors')

app.use(express.json())
app.use(cors())
app.use("/books",router)









mongoose
.connect("mongodb+srv://admin:6oMk7gq1AItTajjW@cluster0.dy6d59k.mongodb.net/bookapp?retryWrites=true&w=majority"
    )
    .then(()=>{
        console.log("database connected");
    })
    .then(()=>{
        app.listen(5000);
    })
    .catch((err)=>{
        console.log(err);
    })

    //6oMk7gq1AItTajjW



