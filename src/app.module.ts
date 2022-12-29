import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { ProductEntity } from "./products/products.entity";
import { ProductsModule } from "./products/products.module";
import { UserEntity } from "./user/user.entity";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    UserModule,
    AuthModule,
    ProductsModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "asadishak",
      password: "password",
      database: "Line-Art-Backend",
      autoLoadEntities: true,
      synchronize: true,
      entities: [UserEntity, ProductEntity],
    }),
  ],
})
export class AppModule {}
