import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    email: string;

    @Column()
    password: string;

}
