import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomOrderEntity } from "./customOrder/customOrders.entity";
import { CustomOrdersModule } from "./customOrder/customOrders.module";
import { ProductEntity } from "./products/products.entity";
import { ProductsModule } from "./products/products.module";

@Module({
  imports: [
    ProductsModule,
    CustomOrdersModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "asadishak",
      password: "password",
      database: "Line-Art-Backend",
      autoLoadEntities: true,
      synchronize: true,
      entities: [ProductEntity, CustomOrderEntity],
    }),
  ],
})
export class AppModule {}
