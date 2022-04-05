import * as tuitsDao from "../database/tuits/tuits-dao.js";

const createTuit = async (req, res) => {
    const newTuit = req.body;
    if (!newTuit.stats) {
        newTuit.stats = {};
    }
    console.log(newTuit)
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
