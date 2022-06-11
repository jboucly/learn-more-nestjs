import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        MikroOrmModule.forRoot({
            type: 'postgresql',
            entities: ['./dist/src/**/*.entity.js'],
            entitiesTs: ['./src/**/*.entity.ts'],
            dbName: 'learn-more-nestjs',
        }),
    ],
})
export class DatabaseModule {}
