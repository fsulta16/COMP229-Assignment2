import mongoose, { PassportLocalSchema } from 'mongoose';
const Schema = mongoose.Schema; // Schema alias
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema
(
    {
        name: String,
        email: String,
        displayName: String,
        created:
        {
            type: Date,
            default: Date.now()
        },
        updated:
        {
            type: Date,
            default: Date.now()
        }
    },
    {
        collection: "users"
    });
    
    UserSchema.plugin(passportLocalMongoose);
    
    const Model = mongoose.model("Contact", UserSchema as PassportLocalSchema);
    
    declare global
    {
        export type UserDocument = mongoose.Document &
        {
            _id: String,
            name: String,
            email: String,
            displayName: String
        }
    }
    export default Model;