import posts from "./tuits/tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
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
    tuits = [newTuit, ...tuits]
    res.json(newTuit);
}


const findAllTuits = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
