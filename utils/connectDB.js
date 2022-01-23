import mongoose from 'mongoose'

const connectDB = () => {
    if(mongoose.connections[0].readyState) {
        console.log('already connected');
        return;
    }
    console.log('connect to db');
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if(err) throw err;
        console.log('connected to mongodb');
    })
}

export default connectDB;