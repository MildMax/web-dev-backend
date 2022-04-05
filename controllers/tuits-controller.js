import * as tuitsDao from "../database/tuits/tuits-dao.js";

const createTuit = async (req, res) => {
    const tuitBody = req.body;
    // required values to meet prior spec requirements
    const newTuit = {
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
    // generate id
    newTuit._id = (new Date()).getTime()+'';
    // place tuit text into tuit
    newTuit.tuit = tuitBody.tuit;
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
    await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.sendStatus(200);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.sendStatus(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
