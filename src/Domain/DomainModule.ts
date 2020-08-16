import { Module } from '@nestjs/common';

import { UserModule } from './User/UserModule';

@Module({
	imports: [
		UserModule,
	],
	exports: [
		UserModule,
	],
})
export class DomainModule {}
