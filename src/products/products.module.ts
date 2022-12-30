import { Global, Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { UserEntity } from "src/user/user.entity";
import { UserModule } from "src/user/user.module";
import { ProductsController } from "./products.controller";
import { ProductEntity } from "./products.entity";
import { ProductsService } from "./products.service";

@Global()
@Module({
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([ProductEntity, UserEntity]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
