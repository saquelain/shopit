import mongoose from "mongoose";
import Product from "../models/product.js";
import products from "./data.js";

const seedProducts = async () => {
    try{
        
        await mongoose.connect("mongodb+srv://saquelain:Password1@cluster0.vlmw8i0.mongodb.net/shopit-v2?retryWrites=true&w=majority&appName=Cluster0");

        await Product.deleteMany();
        console.log('Products are deleted');

        await Product.insertMany(products);
        console.log('Products are Added');
        process.exit();
    }catch(err){
        console.log(err.message);
        process.exit();
    }
}

seedProducts();