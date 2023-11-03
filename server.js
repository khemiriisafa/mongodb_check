const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Person = require("./models/Person");

mongoose.connect("mongodb+srv://safakhemiri8:safsaf456@cluster0.zmcy40i.mongodb.net/gmc?retryWrites=true&w=majority").then(() => console.log("connect to db")).catch((err) => console.log(err));

// Person.insertMany([
//     {
//         name:"Ahmed",
//         age:25 ,
//         favoriteFoods: ["Pizza ", "loubya" , "ma9rouna" ]
//     },
//      {
//         name: "Safa",
//         age: 23,
//         favoriteFoods: ["rouz", "mlewi", "kafteji"]
//     },
//      {
//         name: "Olfa",
//         age: 30,
//         favoriteFoods: ["mloukheya ", "mo9li", "tajine"]
//     },
//      {
//         name: "Rahma",
//         age: 27,
//         favoriteFoods: ["ma9loub ", "djej mechwi", "jilbena"]
//     },
//      {
//         name: "Marwen",
//         age: 25,
//         favoriteFoods: ["mar9et batat", "chakchouka", "salade"]
//     }
// ]);

// Person.find().skip(2)
// .then((res)=>console.log(res)).catch((err)=> console.log(err));

// Person.findOne({ _id: "653f9a1e1ea320f59881db48"}).then ((res)=> console.log(res)).catch ((err)=> console.log(err));

// Person.findOne({ favoriteFoods: "Pizza"}).then((res) => console.log(res)).catch((err) => console.log(err));

// Person.findById("653f9a1e1ea320f59881db4a").then((res) => console.log(res)).catch((err) => console.log(err));

// Person.findByIdAndUpdate("653f9a1e1ea320f59881db49", { $push: { favoriteFoods: "loubya" } }, { new: true })
//     .then((res) => console.log(res)).catch((err) => console.log(err));

// let newPerson = new Person({
//     name :"Safa" ,
//     age: 24,
//     favoriteFood: ["cookies" , "gateau" , "kosksi"] ,  
// });
// newPerson
// .save()
// .then(()=> console.log("person added succesfully"))
// .catch((err)=> console.log(err));
// Person.deleteMany({ name: "Safa" }).then(() => console.log("person was deleted")).catch((err) => console.log(err));

// app.listen(5000, () => {
//     console.log("server is running");
// });