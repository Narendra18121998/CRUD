import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
const app =express();
import ConnectDB from './database/db.js';
ConnectDB();
import Routes from './routes/route.js';
import cors from 'cors'
app.use(cors())

app.use(express.json())
app.use('/' , Routes)


const port=8000;
app.listen(port,()=>{
    console.log(`API is running at http://localhost:${port}`)
})

