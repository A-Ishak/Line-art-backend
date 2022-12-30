import { Controller, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CustomOrdersService } from "./customOrders.service";

@Controller("customOrders")
@UseGuards(AuthGuard())
export class CustomOrdersController {
  constructor(private customOrdersService: CustomOrdersService) {}
}
