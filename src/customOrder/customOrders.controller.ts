import { Body, Controller, Param, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CustomOrderEntity } from "./customOrders.entity";
import { CustomOrdersService } from "./customOrders.service";
import { CreateCustomOrderDto } from "./types/customOrders.types";

@Controller("customOrders/:userId")
@UseGuards(AuthGuard())
export class CustomOrdersController {
  constructor(private customOrdersService: CustomOrdersService) {}
  @Post("/createCustomOrder")
  public async getUserById(
    @Param("userId") userId: string,
    @Body()
    createCustomOrderDto: CreateCustomOrderDto,
  ): Promise<CustomOrderEntity> {
    return this.customOrdersService.createNewCustomOrder({ ...createCustomOrderDto, userId });
  }
}
