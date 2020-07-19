import {Schema, connect, model, Document, Model} from 'mongoose';

const db = connect('mongodb://localhost:27017/test', { useUnifiedTopology: true, useNewUrlParser: true } );


const userSchema =  new Schema({
    name: String,
})

 const UserModel = model('User', userSchema);

 const user = new UserModel({
     name: "ivan",
 })

 user.save();