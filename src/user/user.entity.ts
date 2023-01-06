import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
  Unique,
  JoinTable,
  ManyToMany,
} from "typeorm";
import { IsEmail, IsUUID } from "class-validator";
import { ProductEntity } from "src/products/products.entity";
import { CustomOrderEntity } from "src/customOrder/customOrders.entity";

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

  @ManyToMany(() => ProductEntity)
  @JoinTable()
  productOrder: ProductEntity[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
}
