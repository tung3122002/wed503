
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//connect database
// app.use(cors())
mongoose.connect("mongodb://localhost:27017/w16309")
 .then(()=>console.log("conect thành công"))
const app = express();
import productRouter from "../router/routerProduct";
app.use(express.json());
app.use("/api", productRouter);
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Trần Ngọc Tùng</h1>");
});
