import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://FoodDel:7620457636@cluster0.jhinbdz.mongodb.net/food-del')
    .then(() => console.log("DB Connected"));
}