const express=require("express")
const router=express.Router();  
const Book=require("../models/Book")
const bookController=require("../controller/Book-controller")

router.get("/",bookController.getAllBooks)
router.post("/",bookController.addBook)
router.get("/:id",bookController.getByid)
router.put("/:id",bookController.updateBook)
router.delete("/:id",bookController.deleteBook)

module.exports=router; 