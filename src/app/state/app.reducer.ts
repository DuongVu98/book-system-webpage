import { ActionReducerMap, MetaReducer, ActionReducer } from "@ngrx/store";
import { userReducer } from "../user/user-state/user.reducer";
import { localStorageSync } from "ngrx-store-localstorage";

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
	users: userReducer
};

export function localStorageSyncReducer(
	reducer: ActionReducer<any>
): ActionReducer<any> {
	return localStorageSync({
		keys: ["users"],
		rehydrate: true
	})(reducers);
}

export const metaReducers: Array<MetaReducer<any, any>> = [
	localStorageSyncReducer
];
