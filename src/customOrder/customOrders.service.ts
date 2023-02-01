import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CustomOrderEntity } from "./customOrders.entity";
import {
  CreateCustomOrderDto,
  ECustomOrderCompletionStatus,
  UpdateCustomOrderStatusDto,
} from "./types/customOrders.types";

@Injectable()
export class CustomOrdersService {
  constructor(
    @InjectRepository(CustomOrderEntity)
    private customOrderEntityRepository: Repository<CustomOrderEntity>,
  ) {}

  public async createNewCustomOrder(createCustomOrderDto: CreateCustomOrderDto): Promise<CustomOrderEntity> {
    const newCustomOrder = new CustomOrderEntity();

    newCustomOrder.customerEmail = createCustomOrderDto.customerEmail;
    newCustomOrder.completionStatus = ECustomOrderCompletionStatus.IN_PROGRESS;
    newCustomOrder.printType = createCustomOrderDto.printType;
    newCustomOrder.size = createCustomOrderDto.size;
    newCustomOrder.images = createCustomOrderDto.images;
    newCustomOrder.title = createCustomOrderDto.title;

    await this.customOrderEntityRepository.save(newCustomOrder);
    return newCustomOrder;
  }

  public async getOrderById(id: string) {
    return await this.customOrderEntityRepository.findOneByOrFail({ id: id });
  }

  public async updateOrderStatus(updateCustomOrderStatusDto: UpdateCustomOrderStatusDto): Promise<CustomOrderEntity> {
    const customOrder = await this.getOrderById(updateCustomOrderStatusDto.orderId);
    customOrder.completionStatus = updateCustomOrderStatusDto.updatedStatus;
    try {
      await this.customOrderEntityRepository.save(customOrder);
    } catch (error) {
      console.log(error);
    }
    //this.notificationService.sendStatusUpdate(customOrder.customerEmail,
    // customOrder.status  <-This will update the order status
    // )
    return customOrder;
  }
}
