import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CustomOrderEntity } from "./customOrders.entity";

@Injectable()
export class CustomOrdersService {
  constructor(
    @InjectRepository(CustomOrderEntity)
    private customOrderEntity: Repository<CustomOrderEntity>,
  ) {}
}
