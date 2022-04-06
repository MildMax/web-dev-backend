import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PW;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.daxtl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

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