import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportLocalModel } from 'mongoose';

import { IUserRepository } from '../../Domain/User/IUserRepository';
import { User } from '../../Domain/User/User';
import { IUserEntity } from './UserEntity';

@Injectable()
export class UserRepository implements IUserRepository {
	constructor(@InjectModel('User') private readonly user: PassportLocalModel<IUserEntity>) {}

	public UpdateById(userId: string, updatedFields: Partial<User>): Promise<User> {
		return new Promise<IUserEntity>((resolve, reject) => {
			this.user.findByIdAndUpdate(userId, updatedFields, { new: true }, (err: any, result: IUserEntity) => {
				if (err) {
					reject(err);
				}

				resolve(result);
			});
		});
	}

	public GetById(userId: string): Promise<User> {
		return new Promise<IUserEntity>((resolve, reject) => {
			this.user.findById(userId, (err: any, result: IUserEntity) => {
				if (err) {
					reject(err);
				}

				resolve(result);
			});
		});
	}
}