const Book = require("../models/Book");


// get all books
const getAllBooks = async (req, res, next) => {
    let books;
    try {
        books = await Book.find();
    }
    catch (err) {
        console.log(err);
    }
    if (!books) {
        return res.status(404).json({ message: "No product found" })
    }
    return res.status(200).json({ books })
}

// get book by id
const getByid = async (req, res, next) => {
    const id = req.params.id;
    let book;

    try {
        book = await Book.findById(id);

    }
    catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "No product found" })
    }
    return res.status(200).json({ book })

}


// add book to database
const addBook = async (req, res, next) => {
    const { name, author, description, price, available,image } = req.body;
    let book;
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();
    }
    catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(500).json({ message: "unable to add" });
    }

    return res.status(201).json({ book });
}


// update book to database
const updateBook= async (req,res,next)=>{
    const id=req.params.id
    const {name,author, description, price, available,image}=req.body
    let book;

    try{
        book=await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price, 
            available,
            image
        });

        await book.save();
    }
    catch(err){
        console.log(err);
    }

    if (!book) {
        return res.status(404).json({ message: "unable to update by id" });
    }

    return res.status(201).json({ book });   
}

// delete book by id

const deleteBook=async(req,res,next)=>{
    const id=req.params.id;
    let book;
    try{
        book=await Book.findByIdAndRemove(id);

    }
    catch(err){
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "unable to delete by id" });
    }

    return res.status(201).json({ message: "product deleted successfully"  }); 

}











exports.getAllBooks = getAllBooks;
exports.getByid = getByid;
exports.addBook = addBook;
exports.updateBook=updateBook;
exports.deleteBook=deleteBook;