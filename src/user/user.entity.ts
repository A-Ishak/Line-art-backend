import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
  Unique,
} from "typeorm";
import { IsEmail, IsUUID } from "class-validator";

@Entity({ name: "User" })
@Unique(["email"])
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  @IsUUID()
  id: string;

  @IsEmail()
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
}
