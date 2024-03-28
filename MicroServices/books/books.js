const express= require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dotenv=require("dotenv").config();

require("./Book")
const Book = mongoose.model("Book")
app.use(bodyParser.json())
mongoose.connect(process.env.mongo_url).then(()=>{
console.log("Database connected")
})
app.get('/',(req,res)=>{
res.send("this is our main route")

})

app.post('/book',(req,res)=>{
    var newbook ={

        title:req.body.title,
        author:req.body.author,
        numberPages:req.body.numberPages,
        publisher:req.body.publisher
    }
    var book = new Book(newbook)

    book.save().then(()=>{
        console.log('book created sucessfully')
    })

    res.send("book create functionalty")
    
    })


    app.get('/books',(req,res)=>{

        Book.find().then((books)=>{

            res.json(books)
        }).catch(error =>{
            if(error)
            throw error;
        })
        
        })

        app.get('/book/:id',(req,res)=>{

            Book.findById(req.params.id).then((books)=>{

                console.log(books)
                if(books)
                res.json(books)
                else
                res.sendStatus(404)
            }).catch(error =>{
                res.send('id doesnt exist')
               // console.log(error);
               // if(error)
               // throw error;
            })
            
            })

            app.delete('/book/:id',(req,res)=>{

                Book.findOneAndDelete(req.params.id).then((books)=>{
                    if(books!=null)
                        res.send("book deleted successfully")
                    else
                        res.send("No books with this id");
                }).catch(error =>{
                    res.send('problem in deleting book')
                   // console.log(error);
                   // if(error)
                   // throw error;
                })
                
                })
    

app.listen(4545,()=>{

    console.log('app is running properly 4545')
})