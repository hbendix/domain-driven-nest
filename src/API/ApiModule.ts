import { Module } from '@nestjs/common';
import { UserController } from './User/UserController';
import { DomainModule } from '../Domain/DomainModule';

@Module({
	controllers: [
		UserController,
	],
	imports: [DomainModule]
})
export class ApiModule {}
