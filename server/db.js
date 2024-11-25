const mongoose=require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/Student');
    console.log(`MongoDB connected `);
  } catch (error) {
    console.log(`Error - ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
