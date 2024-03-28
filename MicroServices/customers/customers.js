const express= require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dotenv=require("dotenv").config();

require("./customer")
const Customer = mongoose.model("Customer")
app.use(bodyParser.json())
mongoose.connect(process.env.mongo_url).then(()=>{
console.log("Database connected")
})
app.get('/',(req,res)=>{
res.send("this is our main route")

})

app.post('/customer',(req,res)=>{
    var newCust={
        name:req.body.name,
        age:req.body.age,
        address:req.body.address
    }
    var customer = new Customer(newCust)

    customer.save().then(()=>{
        console.log('customer created sucessfully')

    })

    res.send("customer create functionalty")
    
    })

    app.get('/customers',(req,res)=>{

        Customer.find().then((customers)=>{

            res.json(customers)
        }).catch(error =>{
            if(error)
            throw error;
        })
        
        })


        app.get('/customer/:id',(req,res)=>{


            console.log("custid data",req.params.id)
            Customer.findById(req.params.id).then((customers)=>{

                console.log(customers)
                if(customers)
                res.json(customers)
                else
                res.sendStatus(404)
            }).catch(error =>{
                res.send('id doesnt exist')
               // console.log(error);
               // if(error)
               // throw error;
            })
            
            })

            app.delete('/customer/:id',(req,res)=>{

                Customer.findOneAndDelete(req.params.id).then((customers)=>{
                   res.send("book deleted successfully")
                }).catch(error =>{
                    res.send('problem in deleting book')
                   // console.log(error);
                   // if(error)
                   // throw error;
                })
                
                })




app.listen(5555,()=>{

    console.log('app is running properly 5555')
})