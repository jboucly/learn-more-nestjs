import { Migration } from '@mikro-orm/migrations';

export class Migration20220611181616 extends Migration {
    async up(): Promise<void> {
        this.addSql(
            'create table "user" ("uuid" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "username" varchar(255) not null, "first_name" varchar(255) not null, "last_name" varchar(255) not null, "email" varchar(255) not null, "is_active" boolean not null);',
        );
        this.addSql(
            'alter table "user" add constraint "user_email_unique" unique ("email");',
        );
        this.addSql(
            'alter table "user" add constraint "user_username_email_unique" unique ("username", "email");',
        );
        this.addSql(
            'alter table "user" add constraint "user_pkey" primary key ("uuid");',
        );
    }

    async down(): Promise<void> {
        this.addSql('drop table if exists "user" cascade;');
    }
}
