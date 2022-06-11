import { BaseEntity } from '@learn-more-nestjs/database/class/base-entity';
import { Entity, Property, Unique } from '@mikro-orm/core';

@Entity({
    tableName: 'user',
})
@Unique({ properties: ['username', 'email'] })
export class User extends BaseEntity {
    @Property()
    public username: string;

    @Property()
    public firstName: string;

    @Property()
    public lastName: string;

    @Unique()
    @Property()
    public email: string;

    @Property()
    public isActive: boolean;
}
