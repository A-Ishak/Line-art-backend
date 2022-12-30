import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { create } from "domain";
import { EProductCompletionStatus } from "src/products/types/purchases.types";
import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import { CustomOrderEntity } from "./customOrders.entity";
import { CreateCustomOrderDto, ECustomOrderCompletionStatus } from "./types/customOrders.types";

@Injectable()
export class CustomOrdersService {
  constructor(
    @InjectRepository(CustomOrderEntity)
    private customOrderEntity: Repository<CustomOrderEntity>,
    private userService: UserService,
  ) {}

  public async createNewCustomOrder(createCustomOrderDto: CreateCustomOrderDto): Promise<CustomOrderEntity> {
    const newCustomOrder = new CustomOrderEntity();
    const user = await this.userService.getUserById(createCustomOrderDto.userId);

    newCustomOrder.user = user;
    newCustomOrder.completionStatus = ECustomOrderCompletionStatus.IN_PROGRESS;
    newCustomOrder.printType = createCustomOrderDto.printType;
    newCustomOrder.images = createCustomOrderDto.images;
    newCustomOrder.title = createCustomOrderDto.title;
    if (createCustomOrderDto.size) {
      newCustomOrder.size = createCustomOrderDto.size;
    }
    this.customOrderEntity.save(newCustomOrder);
    return newCustomOrder;
  }
}
