import { forwardRef, Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomOrderEntity } from "src/customOrder/customOrders.entity";
import { ProductEntity } from "src/products/products.entity";
import { AuthModule } from "../auth/auth.module";
import { UserController } from "./user.controller";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";
@Global()
@Module({
  imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([UserEntity, ProductEntity, CustomOrderEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
