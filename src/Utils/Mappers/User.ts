import { User } from "../../Domain/User/User";
import { UpdateUserDTO } from "../../API/User/UpdateDTO";

export class UserMapper {
	public static UpdateToDomain(update: UpdateUserDTO): Partial<User> {
		const partialUser: Partial<User> = {
			Name: update.name ?? undefined,
			Email: update.email ?? undefined,
			IsOnMailingList: update.isOnMailingList ?? undefined,
		};
		Object.keys(partialUser).forEach(key => partialUser[key] === undefined && delete partialUser[key]);

		return partialUser;
	}
}