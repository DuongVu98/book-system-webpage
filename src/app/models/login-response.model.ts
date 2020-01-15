import { User } from './user.model';

export class LoginResponse {
	user: User;
	accessToken: string;
	tokenType: string;
}
