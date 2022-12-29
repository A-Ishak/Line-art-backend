import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  public async getUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneByOrFail({
      email: email,
    });
    return user;
  }

  public async getUserById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneByOrFail({ id: id });
    console.log(user);
    return user;
  }

  public async getAllUsers(): Promise<UserEntity[]> {
    console.log("allusers");
    const allUsers = await this.userRepository.find({});
    return allUsers;
  }
}
