const moongoose = require('mongoose');

const roomSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Room = mongoose.moodel('room', roomSchema);
module.exports = Room;