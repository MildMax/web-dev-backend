import * as tuitsDao from "../database/tuits/tuits-dao.js";
import posts from "./tuits/tuits.js";

const createTuit = async (req, res) => {
    const tuitBody = req.body;
    // required values to meet prior spec requirements
    let newTuit = {
        topic: "Web Development",
            postedBy: {
        username: "ReactJS"
        },
        liked: false,
            disliked: false,
        verified: false,
        handle: "ReactJS",
        time: "2h",
        tuit: "",
        avatarImage: "/images/doom-guy-alt.png",
        attachments: {
        image: "/images/doom_banner_alt.jpg"
        },
        stats: {
            comments: 0,
                retuits: 0,
                likes: 0,
                dislikes: 0
        },
    }
    // new vals
    // place tuit text into tuit
    newTuit = {
        ...newTuit,
        ...tuitBody,
        timePosted: (new Date()).getTime()
    }
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits();
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}

const populateDB = async (req, res) => {
    for (const post of posts.reverse()) {
        post.timePosted = (new Date()).getTime();
        console.log(post)
        await tuitsDao.createTuit(post);
    }
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.get('/api/tuits/populate', populateDB);
}
