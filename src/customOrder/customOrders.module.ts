import { Global, Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { UserEntity } from "src/user/user.entity";
import { UserModule } from "src/user/user.module";
import { CustomOrdersController } from "./customOrders.controller";
import { CustomOrderEntity } from "./customOrders.entity";
import { CustomOrdersService } from "./customOrders.service";

@Global()
@Module({
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([CustomOrderEntity, UserEntity]),
  ],
  controllers: [CustomOrdersController],
  providers: [CustomOrdersService],
  exports: [CustomOrdersService],
})
export class CustomOrdersModule {}
