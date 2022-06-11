import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [
        MikroOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgresql',
                entitiesTs: ['./src/**/*.entity.ts'],
                entities: ['./dist/src/**/*.entity.js'],
                debug: configService.get('database.logs'),
                user: configService.getOrThrow('database.user'),
                host: configService.getOrThrow('database.host'),
                dbName: configService.getOrThrow('database.name'),
                password: configService.getOrThrow('database.password'),
            }),
        }),
    ],
})
export class DatabaseModule {}
