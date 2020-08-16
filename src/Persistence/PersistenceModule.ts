import { Module } from '@nestjs/common';

import { UserRepositoryModule } from './User/UserRepositoryModule';

@Module({
	imports: [
		UserRepositoryModule,
	],
	exports: [
		UserRepositoryModule,
	],
})
export class PersistenceModule {}
