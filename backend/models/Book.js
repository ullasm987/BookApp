const mongoose=require("mongoose")

const Scheme=mongoose.Schema;

const bookscheme=new Scheme({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    available:{
        type:Boolean,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Book",bookscheme);