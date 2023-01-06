import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomOrdersController } from "./customOrders.controller";
import { CustomOrderEntity } from "./customOrders.entity";
import { CustomOrdersService } from "./customOrders.service";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([CustomOrderEntity])],
  controllers: [CustomOrdersController],
  providers: [CustomOrdersService],
  exports: [CustomOrdersService],
})
export class CustomOrdersModule {}
