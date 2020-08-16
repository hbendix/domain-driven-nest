import { Module } from '@nestjs/common';
import { AuthGuard } from './Guards/AuthGuard';

@Module({
	providers: [AuthGuard],
})
export class AuthorisationModule {}
