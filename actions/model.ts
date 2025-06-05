import { Schema, model, models } from 'mongoose';

// Clear the cached model first in development
if (models.User) {
  delete models.User;
}

const userSchema = new Schema({
  email: { type: String, required: true },
  fullName: {type: String, required: true},
  password: {type: String, required: true},
  createdAt: { type: Date, default: Date.now },
});

const User = model("User", userSchema);

export default User;
