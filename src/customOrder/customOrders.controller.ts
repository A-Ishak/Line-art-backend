import { Body, Controller, Patch, Post } from "@nestjs/common";
import { CustomOrderEntity } from "./customOrders.entity";
import { CustomOrdersService } from "./customOrders.service";
import { CreateCustomOrderDto, UpdateCustomOrderStatusDto } from "./types/customOrders.types";

@Controller("customOrders")
export class CustomOrdersController {
  constructor(private customOrdersService: CustomOrdersService) {}
  @Post("/createCustomOrder")
  public async getUserById(
    @Body()
    createCustomOrderDto: CreateCustomOrderDto,
  ): Promise<CustomOrderEntity> {
    return this.customOrdersService.createNewCustomOrder(createCustomOrderDto);
  }

  @Patch("/updateCustomOrderStatus")
  public async updateCustomOrderStatus(
    @Body()
    updateCustomOrderStatusDto: UpdateCustomOrderStatusDto,
  ): Promise<CustomOrderEntity> {
    return this.customOrdersService.updateOrderStatus(updateCustomOrderStatusDto);
  }
}
