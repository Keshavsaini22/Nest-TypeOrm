import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly usersService: UserService) { }

    @Post()
    createUser(@Body() body: any) {
        try {
            const res=this.usersService.createUser(body);
            console.log('res: ', res);
        } catch (error) {
            console.log('error: ', error);
        }
     }
}