const Users = require("../models/users");
const bcrypt = require("bcryptjs");
const fs = require('fs')
class User {
  // user signup api
  async userSignUp(req, res) {
    let userdetails = req.body.userdetails;
    console.log("userdetails", userdetails);
    let data = await Users.findOne({ email: userdetails.email });
  
    if (data) {
      console.log("User already exists");
      return res.status(400).send({
        message: `User Already Exists with phone number: ${data.email}`,
        status: 400,
      });
    }
  
    const user = new Users({
      firstName: userdetails.Firstname,
      lastName: userdetails.Lastname,
      password: userdetails.password,
      email: userdetails.email, 
      address: userdetails.address, 
      city: userdetails.city, 
      state: userdetails.State, 
      pinCode: userdetails.pincode, 
    });
  
    await user.save();
    console.log("User registered");
    return res.status(200).send({
      message: "User Created",
      result: user,
      status: 200,
    });
  }
  

  // user login api
  async Login(req, res) {
    let userdetails = req.body.logindetails;
    console.log("userdetails", userdetails);
    let email = userdetails.username;
    let Password = userdetails.password;
    let data = await Users.findOne({ email: email });

    if (!data) {
      console.log("User Not Found")
      return res.status(400).send({
        message: `email password not match`,
        status: 400,
      });
    }
    let isMatch = await bcrypt.compare(Password, data.password)
    if (!isMatch) {
      console.log("password not match")
      return res.status(400).send({
        message: `email password not match`,
        status: 400,
      });
    }
    console.log("user succesfully login")
    return res.status(200).send({
      message: `Login Succesfully`,
      status: 200,
      userdetail: data,
    });
  }

  
}

module.exports = User;
