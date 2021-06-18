import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for the Mongoose Schema
// Schema for database Contact
const ContactSchema = new Schema
({
    Name: String, 
    Phone: String,
    Email: String
},
{
    collection: "contact"
});
// Export Contact
const Model = mongoose.model("Contact",ContactSchema);
export default Model;