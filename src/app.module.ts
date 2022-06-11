import { configurations } from '@learn-more-nestjs/configs/index';
import { ResourcesModule } from '@learn-more-nestjs/resources/resources.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [
        DatabaseModule,

        ConfigModule.forRoot({
            isGlobal: true,
            load: configurations,
        }),

        ResourcesModule,
    ],
})
export class AppModule {}
