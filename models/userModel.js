import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Enter Your FullName"]
    },
    address: {
        type: String,
        required: [true, "Enter Your Correct Address"]
    },
    phone: {
        type: String,
        required: [true, "Enter Your Correct Phone Number"]
    },
    image: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Enter Your Correct Email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Enter Your Password"],

    }
}, {
    timestamps: true
});

const userModel = mongoose.model('User', userSchema);
export { userModel };
