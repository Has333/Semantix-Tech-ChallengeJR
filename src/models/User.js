import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    addressNumber: {
        type: String,
    },
    phoneNumber: {
        type: String
    }
});

export default mongoose.model('User', UserSchema);