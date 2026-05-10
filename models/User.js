const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true // This is the only unique constraint we need for now
    },
    status: { 
        type: String, 
        default: "Genius Recognized" 
    },
    atrophyLevel: { 
        type: Number, 
        default: 0 
    }
}, { timestamps: true }); // Automatically track the moment of creation

module.exports = mongoose.model('User', UserSchema);