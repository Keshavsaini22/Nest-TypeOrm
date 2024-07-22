import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserRepository } from "src/infrastructure/repositories/user/user.repository";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: []
})
export class UserModule { }