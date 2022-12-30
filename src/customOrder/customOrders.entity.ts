import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Unique, ManyToOne } from "typeorm";
import { IsEmail, IsUUID } from "class-validator";
import { ECustomOrderCompletionStatus, ECustomOrderSizes, ECustomPrintTypes } from "./types/customOrders.types";
import { UserEntity } from "src/user/user.entity";

@Entity({ name: "CustomOrders" })
export class CustomOrderEntity {
  @PrimaryGeneratedColumn("uuid")
  @IsUUID()
  id: string;

  @IsEmail()
  @Column({ unique: true })
  title: string;

  @ManyToOne(() => UserEntity, (user) => user.customOrders)
  user: UserEntity;

  @Column()
  size: ECustomOrderSizes;

  @Column()
  printType: ECustomPrintTypes;

  @Column()
  completionStatus: ECustomOrderCompletionStatus;

  @Column()
  images: string;

  @CreateDateColumn({ name: "created_at" })
  purchaseDate: Date;
}
