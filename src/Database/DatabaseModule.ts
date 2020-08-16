import { Module } from '@nestjs/common';
import { DatabaseConnectionService } from './DatabaseConnecitonService';

@Module({
	providers: [DatabaseConnectionService],
	exports: [DatabaseConnectionService],
})
export class DatabaseModule {}
