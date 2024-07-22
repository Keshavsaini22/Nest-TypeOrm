import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const ormConfig: TypeOrmModuleOptions = {
    type: "postgres",
    username: 'postgres',
    password: 'root',
    database: 'TodoType',
    host: 'localhost',
    port: 5432,
    entities: ["dist/src/domaain/**/*.entity{.ts,.js}"],
    synchronize: false,
}