import { PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

export class BaseEntity {
    @PrimaryKey()
    public uuid: string = v4();

    @Property()
    public createdAt: Date = new Date();

    @Property({ onUpdate: () => new Date() })
    public updatedAt: Date = new Date();
}
