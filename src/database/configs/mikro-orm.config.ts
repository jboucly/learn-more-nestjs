import { MikroORMOptions } from '@mikro-orm/core';

export default {
    type: 'postgresql',
    host: process.env.DATABASE_HOST,
    dbName: process.env.DATABASE_NAME,
    entitiesTs: ['./src/**/*.entity.ts'],
    entities: ['./dist/src/**/*.entity.js'],
    port: process.env.DATABASE_PORT || 5432,
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    debug: process.env.DATABASE_LOGS === 'true' || true,
    migrations: {
        tableName: 'migrations_field',
        path: 'src/database/migrations',
    },
} as MikroORMOptions;
