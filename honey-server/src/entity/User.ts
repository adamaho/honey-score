import * as brcrypt from 'bcryptjs';

import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert
} from 'typeorm';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hasPasswordBeforeInsert() {
      this.password = await brcrypt.hash(this.password, 10);
    }

}
