import {Schema, connect, model, Document, Model} from 'mongoose';

const db = connect('mongodb://localhost:27017/test', { useUnifiedTopology: true, useNewUrlParser: true } );

interface IUser {
    name: string;
}

interface IUserModel extends Document, IUser {}

const userSchema: Schema<IUserModel> =  new Schema({
    name: {type: String, unique: true}
})

 const UserModel: Model<IUserModel> = model('User', userSchema);

 //one way
 const user = new UserModel({
     name: "ivan",
 })
 user.save().catch(e => console.log(e));

 //second way
 const user2 = UserModel.create({name: "sergey"}, (e, u: IUserModel) => {
     if(e) console.log(e);
     console.log(u.name);
 })
