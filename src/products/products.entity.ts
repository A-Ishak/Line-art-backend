import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Unique } from "typeorm";
import { IsEmail, IsUUID } from "class-validator";
import { EPrintTypes, EProductCompletionStatus, EProductSizes } from "./types/purchases.types";

@Entity({ name: "Product" })
export class ProductEntity {
  @PrimaryGeneratedColumn("uuid")
  @IsUUID()
  id: string;

  @IsEmail()
  @Column({ unique: true })
  name: string;

  @Column()
  size: EProductSizes;

  @Column()
  printType: EPrintTypes;

  @Column()
  completionStatus: EProductCompletionStatus;

  @Column()
  imageFilePath: string;

  @CreateDateColumn({ name: "created_at" })
  purchaseDate: Date;
}
