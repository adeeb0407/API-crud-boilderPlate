import mongoose from 'mongoose';

const restModel = mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true,
    },
    description : {
        type : String,
        require : true,
        unique : true,
    },
    createdAt : {
        type : Date,
        default : new Date(),
    },
    updatedAt : {
        type : Date,
        default : new Date(),
    }
})

const RestModel = mongoose.model('rest', restModel)

export default RestModel;