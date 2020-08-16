import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserRepository } from './Repository';
import { UserSchema } from './UserEntity';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
	providers: [UserRepository],
	exports: [UserRepository],
})
export class UserRepositoryModule {}
