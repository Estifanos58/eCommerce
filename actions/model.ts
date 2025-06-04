import { Schema, model, models} from 'mongoose';

const userSchema = new Schema({
    email: { type: String, required: true },
    tempPassword: { type: String},
    role: {type:String},
    expiresAt: {type:Date}
})

const User = models.User || model("User", userSchema);

export default User;