import { Provider } from "@nestjs/common";
import { UserRepository } from "./Repository";

export const UserRepoProvider: Provider = {
    provide: 'UserRepo',
    useClass: UserRepository
}