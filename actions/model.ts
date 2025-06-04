import { UserType } from '@/utils/types';
import mongoose, { Schema, Document, Model } from 'mongoose';

const UserSchema: Schema<UserType> = new Schema(
    {
        username: { type: String, required: true, unique: true },
        email:    { type: String, required: true, unique: true },
        password: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    },
    { collection: 'users' }
);

const User: Model<UserType> = mongoose.models.User || mongoose.model<UserType>('User', UserSchema);

export default User;
