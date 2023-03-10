import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserEntity } from "../user/user.entity";
import { AuthService } from "./auth.service";
import { AuthCredentialsDto, CreateUserDto } from "../user/user.dto";
import { EmailToLowerCasePipe } from "../shared/pipes/validation-pipes";

@Controller("auth")
export default class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/signup")
  signUp(@Body(new EmailToLowerCasePipe()) authCredentialsDto: CreateUserDto): Promise<UserEntity> {
    return this.authService.createUser(authCredentialsDto);
  }

  @Post("/signin")
  signIn(
    @Body(new EmailToLowerCasePipe()) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ jwt: string; user: UserEntity }> {
    return this.authService.signIn(authCredentialsDto);
  }

  @Get("/verifyJwt")
  verify(@Body() jwt: string) {
    return this.authService.verifyJwt(jwt);
  }
}
