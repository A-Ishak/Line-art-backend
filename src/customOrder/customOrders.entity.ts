import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Unique } from "typeorm";
import { IsEmail, IsUUID } from "class-validator";
import { ECustomOrderCompletionStatus, ECustomOrderSizes, ECustomPrintTypes } from "./types/customOrders.types";

@Entity({ name: "CustomOrders" })
export class CustomOrderEntity {
  @PrimaryGeneratedColumn("uuid")
  @IsUUID()
  id: string;

  @IsEmail()
  @Column({ unique: true })
  name: string;

  @Column()
  size: ECustomOrderSizes;

  @Column()
  printType: ECustomPrintTypes;

  @Column()
  completionStatus: ECustomOrderCompletionStatus;

  @CreateDateColumn({ name: "created_at" })
  purchaseDate: Date;
}
