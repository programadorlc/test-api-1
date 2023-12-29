import express from "express";
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 9001;
const app = express();
app.use(express.json());

app.get('/home', (req, res) => {
  res.json('Home')
})

app.get('/about', (req, res) => {
  res.json('About')
})

app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
})