
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const StudentModel = require("./model/student");

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/Student")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });



  app.post('/', (req, res) => {
    StudentModel.create(req.body)
        .then(() => {
          console.log("hi");
          res.json(req.body)})
        .catch(err => res.json(err));
});

app.delete('/:id',(req,res)=>{
  const id=req.params.id;
  StudentModel.findOneAndDelete({id})
  .then((res) => {console.log("deleted");
  })
  .catch((err)=>{console.log(err)}
  )
})

   app.get('/', async (req, res) => {
    try {
      const students = await StudentModel.find();
      res.json(students);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});