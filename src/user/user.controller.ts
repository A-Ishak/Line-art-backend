import { Body, Controller, Get, Inject, Param, Query, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

@Controller("user")
@UseGuards(AuthGuard())
export class UserController {
  constructor(private userService: UserService) {}

  @Get("/getAllUsers")
  public async getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUsers();
  }

  @Get("/getUserByEmail/:email")
  public async getUserByEmail(
    @Param("email")
    email: string,
  ): Promise<UserEntity> {
    return this.userService.getUserByEmail(email);
  }

  @Get("/getUserById/:id")
  public async getUserById(
    @Param("id")
    id: string,
  ): Promise<UserEntity> {
    return this.userService.getUserById(id);
  }
}
