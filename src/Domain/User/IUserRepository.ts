import { User } from './User';

export interface IUserRepository {
	UpdateById(userId: string, updatedFields: Partial<User>): Promise<User>;
	GetById(userId: string): Promise<User>;
}
