import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import compression from 'compression';
import cors from "cors";

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