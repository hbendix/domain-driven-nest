import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { DatabaseModule } from './Database/DatabaseModule';
import { DatabaseConnectionService } from './Database/DatabaseConnecitonService';
import { PersistenceModule } from './Persistence/PersistenceModule';
import { ApiModule } from './API/ApiModule';
import { UtilitiesModule } from './Utils/UtilitiesModule';
import { DomainModule } from './Domain/DomainModule';
import { AuthorisationModule } from './Authorisation/AuthorisationModule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
	ConfigModule.forRoot({
		isGlobal: true,
		envFilePath: `${process.env.NODE_ENV}.env`,
	}),
	MongooseModule.forRootAsync({
		imports: [DatabaseModule],
		useFactory: (database: DatabaseConnectionService) => {
			return <MongooseModuleOptions>{
				uri: database.get(),
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			};
		},
		inject: [DatabaseConnectionService],
	}),
	PersistenceModule,
	ApiModule,
	UtilitiesModule,
	DomainModule,
	AuthorisationModule,
  ],
})
export class AppModule {}
