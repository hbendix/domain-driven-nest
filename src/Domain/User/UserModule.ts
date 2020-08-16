import { Module } from '@nestjs/common';
import { Update } from './Update';
import { UserRepositoryModule } from '../../Persistence/User/UserRepositoryModule';

@Module({
	imports: [
		UserRepositoryModule,
	],
	providers: [Update],
	exports: [Update],
})
export class UserModule {}
