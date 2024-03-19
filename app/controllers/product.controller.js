const Product = require("../models/product");
const Order = require("../models/order")
const bcrypt = require("bcryptjs");
const fs = require('fs')
class Products {

async getproduct(req,res){
    console.log("inside get product")

    let data = await Product.find({});

    if(!data){
return(
    res.status(400).send({
        message:"data not found",
        status:400
    })
)
    }
    else{
        return(
            res.status(200).send({
                message:"data found",
                product:data,
                status:200
            })
        )
    }
}    


async orderProduct(req,res){
        const { user, orderList, totalAmount } = req.body;
        console.log("details",req.body)
        const orderlist = orderList.map(product => ({
            name: product.name,
            description: product.description,
            price: product.price
          }));
        try {
             
            const order = new Order({
                user : user,
                OrderList : orderlist,
                totalAmount: totalAmount,
              
              });
            
              await order.save();
            
              return(
                res.status(200).send({
                    message:'order placed successfully',
                    status:200,
                    orderId:order._id
                })
              )


        }catch(error){
   return(
    res.status(500).send({
        message:`${error}`,
        status:500
    })
   )
        }
      
    
         
}
  
}

module.exports = Products;
