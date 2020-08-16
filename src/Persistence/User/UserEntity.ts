import { Schema, PassportLocalSchema, PassportLocalDocument } from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

import { User } from '../../Domain/User/User';

export const UserSchema: PassportLocalSchema = new Schema(
	{
		_id: { type: Schema.Types.ObjectId, required: true, auto: true },
		Name: { type: String, required: true },
		Email: { type: String, required: true, unique: true },
		Password: { type: String, required: true },
		IsOnMailingList: { type: Boolean, required: true },
	},
	{ timestamps: { createdAt: 'Created', updatedAt: false } },
);

UserSchema.plugin(passportLocalMongoose, {
	usernameField: 'Email',
	hashField: 'Password',
});

// has to be an interface so you can extend
export interface IUserEntity extends Omit<User, '_id'>, PassportLocalDocument {}
