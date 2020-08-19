import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserRepository } from './Repository';
import { UserSchema } from './UserEntity';
import { UserRepoProvider } from './UserPersistenceProvider';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
	providers: [UserRepoProvider],
	exports: [UserRepoProvider],
})
export class UserRepositoryModule {}
