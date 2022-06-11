import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
    name: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT || 5455,
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    logs: process.env.DATABASE_LOGS === 'true' || true,
}));
