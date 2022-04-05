import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
mongoose.connect('mongodb://localhost:27017/webdev');

const app = express();
app.use(cors());
app.use(express.json());

helloController(app);
userController(app);
tuitsController(app);

app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!');
})

app.listen(process.env.PORT || 4000);