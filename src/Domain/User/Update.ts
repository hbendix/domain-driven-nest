import { Injectable, Inject } from '@nestjs/common';
import { User } from './User';
import { IUserRepository } from './IUserRepository';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class Update {
	constructor(
		@UserRepo() private readonly userRepository: IUserRepository,
	) {}

	public async Update(userId: string, toUpdate: Partial<User>): Promise<void> {
		await this.userRepository.UpdateById(userId, toUpdate);
	}
}
