import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "src/infrastructure/repositories/user/user.repository";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository) private userRepository: UserRepository
    ) { }
    async createUser(user: any) {
        console.log('userService: ', user);
        const response = await this.userRepository.createUser(user);
        console.log('response: ', response);
    }
}