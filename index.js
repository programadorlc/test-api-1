import express from "express";
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 9001;
const app = express();

app.get('/home', (req, res) => {
  res.send('Home')
})

app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
})