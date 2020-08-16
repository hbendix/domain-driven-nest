import { Injectable } from '@nestjs/common';
import { User } from './User';
import { UserRepository } from '../../Persistence/User/Repository';

@Injectable()
export class Update {
	constructor(
		private readonly userRepository: UserRepository,
	) {}

	public async Update(userId: string, toUpdate: Partial<User>): Promise<void> {
		await this.userRepository.UpdateById(userId, toUpdate);
	}
}
