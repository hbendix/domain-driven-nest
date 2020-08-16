import { Controller, UseGuards, Get, HttpStatus, Put, Param } from "@nestjs/common";
import { AuthGuard } from "../../Authorisation/Guards/AuthGuard";
import { UpdateUserDTO } from "./UpdateDTO";
import { Update } from "../../Domain/User/Update";
import { UserMapper } from "../../Utils/Mappers/User";

@Controller('user')
export class UserController {
	constructor(
		private readonly updateUser: Update
	){}

	@UseGuards(AuthGuard)
	@Get()
	public Get(): HttpStatus {
		return;
	}

	@UseGuards(AuthGuard)
	@Put(':userId')
	public async Update(@Param('userId') userId: string, dto: UpdateUserDTO): Promise<HttpStatus> {
		await this.updateUser.Update(userId, UserMapper.UpdateToDomain(dto));

		return HttpStatus.OK;
	}
}
