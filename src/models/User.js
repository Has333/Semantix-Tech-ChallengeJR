import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    addressNumber: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    }
});

export default mongoose.model('User', UserSchema);