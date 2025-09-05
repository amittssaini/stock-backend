const express=  require('express');
const cors = require('cors')
require('dotenv').config();
const app = new express();
const stockRouter = require('./routes/stock.route')


app.listen(process.env.PORT,()=>console.log("SERVER IS RUNNING :: ",process.env.PORT));
app.use(cors());
app.use(express.json());

// routes 
app.use("/api/stocks",stockRouter);
