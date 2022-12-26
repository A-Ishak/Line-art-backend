import { Body, Controller, Get, Inject, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { EmailToLowerCasePipe } from "../shared/pipes/validation-pipes";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

@Controller("user")
@UseGuards(AuthGuard())
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Get("/getUserByEmail")
  public async getUserById(
    @Body(new EmailToLowerCasePipe())
    email: string,
  ): Promise<UserEntity> {
    return this.userService.getUserByEmail(email);
  }
}
