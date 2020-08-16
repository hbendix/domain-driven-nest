import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();

		const authHeader: string | undefined = request.get('Authorization');

		if (authHeader) {
			return true;
		}
		return false;
	}
}
