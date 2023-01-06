import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
import { IsEmail, IsString, IsUUID } from "class-validator";
import { ECustomOrderCompletionStatus, ECustomOrderSizes, ECustomPrintTypes } from "./types/customOrders.types";

@Entity({ name: "CustomOrders" })
export class CustomOrderEntity {
  @PrimaryGeneratedColumn("uuid")
  @IsUUID()
  id: string;

  @IsEmail()
  @Column({ unique: true })
  customerEmail: string;

  @IsString()
  @Column()
  title: string;

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
