import { Global, Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "src/user/user.module";
import { ProductsController } from "./products.controller";
import { ProductEntity } from "./products.entity";
import { ProductsService } from "./products.service";

@Global()
@Module({
  imports: [forwardRef(() => UserModule), TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
