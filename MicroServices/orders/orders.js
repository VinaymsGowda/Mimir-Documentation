const express= require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const axios = require("axios")
const dotenv=require("dotenv").config();
require("./order")
const Order = mongoose.model("Order")
app.use(bodyParser.json())
mongoose.connect(process.env.mongo_url).then(()=>{
    console.log("Database connected")

})
app.get('/',(req,res)=>{
res.send("this is our main route")

})

app.post('/order',(req,res)=>{
    var newOrder={
        CustomerID:req.body.CustomerID,
        BookId:req.body.BookId,
        initialDate:req.body.initialDate,
        deliveryDate:req.body.deliveryDate
    }
    var order = new Order(newOrder)

    order.save().then(()=>{
        console.log('order created sucessfully')

    })

    res.send("order create functionalty")
    
    })

    app.get('/orders',(req,res)=>{

        Order.find().then((orders)=>{

            res.json(orders)
        }).catch(error =>{
            if(error)
            throw error;
        })
        
        })

        app.get('/order/:id',(req,res)=>{

            Order.findById(req.params.id).then((orders)=>{

                console.log(orders)
                if(orders)

                //console.log("http://ip_address:5555/customer/"+orders.CustomerID);

                axios.get("http://ip_address:5555/customer/"+orders.CustomerID).then((resposne)=>{

                console.log("respsne from then",resposne.data);

                axios.get("http://ip_address:5555/customer/"+orders.CustomerID).then((resposne)=>{


                })
               })
                res.send("quick resposne")
                //res.json(orders)
               // else
               // res.sendStatus(404)
            }).catch(error =>{
                res.send('id doesnt exist')
               // console.log(error);
               // if(error)
               // throw error;
            })
        })

app.listen(7777,()=>{

    console.log('app is running properly 7777')
})