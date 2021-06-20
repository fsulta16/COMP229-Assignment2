import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for the Mongoose Schema
// Schema for database Contact
const ContactSchema = new Schema
({
    name: String, 
    phone: String,
    email: String
},
{
    collection: "contact"
});
// Export Contact
const Model = mongoose.model("contact",ContactSchema);
export default Model;