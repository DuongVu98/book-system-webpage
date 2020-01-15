import * as fromRoot from "../../state/app.reducer";
import { User } from "src/app/models/user.model";

export interface UserState {
	user: User;
	isLogged: boolean;
	accessToken: string;
}

export interface AppState extends fromRoot.AppState {
	user: UserState;
}

export const initUserState: UserState = {
	user: null,
	isLogged: false,
	accessToken: null
};

export function userReducer(state = initUserState, action): UserState {
	switch (action.type) {
		case "LOGIN": {
			return {
				...state,
				user: action.payload.user,
				isLogged: true,
				accessToken: action.payload.accessToken
			};
		}
		case "LOGOUT": {
			return {
				...state,
				user: action.payload.user,
				isLogged: action.payload.isLogged,
				accessToken: action.payload.accessToken
			};
		}
		default: {
			return state;
		}
	}
}
