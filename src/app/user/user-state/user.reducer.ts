import * as fromRoot from "../../state/app.reducer";

export interface UserState {
	user: any;
	isLogged: boolean;
}

export interface AppState extends fromRoot.AppState {
	user: UserState;
}

export const initUserState: UserState = {
	user: null,
	isLogged: false
};

export function userReducer(state = initUserState, action): UserState {
	switch (action.type) {
		case "LOGIN": {
			return {
				...state,
				user: action.payload.user,
				isLogged: true
			};
		}
		default: {
			return state;
		}
	}
}
