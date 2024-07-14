import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import compression from 'compression';
import cors from "cors";
import mongoose from "mongoose";

const app = express();

//this is important for authentication
app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(express.json()); // Use built-in body parser
app.use(express.urlencoded({ extended: true })); // Use built-in URL-encoded parser

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
})

const MONGO_URL = "mongodb+srv://faisalbhuiyan3038:faisalbhuiyan3038@cluster0.pqskqum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));