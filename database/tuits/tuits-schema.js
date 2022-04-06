import mongoose from 'mongoose';

const schema = mongoose.Schema({
    topic: String,
    postedBy: {
        username: String
    },
    liked: Boolean,
    disliked: Boolean,
    verified: Boolean,
    handle: String,
    time: String,
    tuit: String,
    timePosted: Number,
    avatarImage: String,
    attachments: {
        image: String,
        video: String,
    },
    stats: {
        comments: Number,
        retuits: Number,
        likes: Number,
        dislikes: Number
    }
}, {collection: 'tuits'});

export default schema;