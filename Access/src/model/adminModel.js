const mongoose = require('mongoose');
const validator =require("validator");

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true
    },
    email: {
        type: String, 
        required: true, 
        lowercase: true, 
        trim: true,
        unique:[true,'email is already present'],
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    
    },
    phone: {
        type: Number, 
        required: true, 
        trim: true,
        unique:[true,'phone is already present'],
        validate(value){
            if (!validator.isMobilePhone(value)){
                throw new Error("Invalid phone")
            }
        }
    
    },
    password: {
        type: String, 
        required: true, 
        min: 8, 
        max: 15
    }, 
    address: {
        shipping: {
            street: {type: String, required: true},
            city: {type: String, required: true},
            pincode: {type: Number, required: true}
        }
 
    },

}, { timestamps: true });


module.exports = mongoose.model('admin', adminSchema)