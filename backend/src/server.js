import express from 'express';
import {ENV} from "./config/env.js";
import { connectDB } from './config/db.js';

const app = express();

app.get("/", (req, res)=> {
    res.send("Hello World! 123");
});
console.log("mongo_uri:", ENV.MONGO_URI);

app.listen(ENV.PORT, ()=> {
    console.log("Server running on port :", ENV.PORT);
    connectDB();
});
