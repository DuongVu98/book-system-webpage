import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Store, select } from "@ngrx/store";

@Injectable({
	providedIn: "root"
})
export class UserStateService {
	private userIsLogged = false;
	private loggedUserFromState: User;
	private accessToken: string;

	constructor(private store: Store<any>) {}

	async checkLoginFromState(): Promise<boolean> {
		await this.store
			.pipe(select("users"))
			.subscribe(loggedUserFromState => {
				if (loggedUserFromState) {
					if (loggedUserFromState.isLogged === true) {
						this.userIsLogged = true;
						this.accessToken = loggedUserFromState.accessToken;
					} else {
						this.userIsLogged = false;
					}
				} else {
					this.userIsLogged = false;
				}
			});

		return this.userIsLogged;
	}

	async getUserFromState(): Promise<User> {
		await this.store
			.pipe(select("users"))
			.subscribe(loggedUserFromState => {
				if (loggedUserFromState) {
					this.loggedUserFromState = loggedUserFromState;
				}
			});

		return this.loggedUserFromState;
	}

	async getUserIdFromState(): Promise<string> {
		let id;
		await this.store
			.pipe(select("users"))
			.subscribe(loggedUserFromState => {
				if (loggedUserFromState) {
					id = loggedUserFromState.user.id;
				}
			});

		return id;
	}

	async getAccessTokenFromState(): Promise<string> {
		let accessToken;
		await this.store
			.pipe(select("users"))
			.subscribe(loggedUserFromState => {
				if (loggedUserFromState) {
					accessToken = loggedUserFromState.accessToken;
				}
			});

		return accessToken;
	}

	saveUserToStore(user: User, accessToken: string) {
		this.store.dispatch({
			type: "LOGIN",
			payload: {
				user,
				isLogged: true,
				accessToken: accessToken
			}
		});
	}

	deleteUserFromStore() {
		this.store.dispatch({
			type: "LOGOUT",
			payload: {
				user: null,
				isLogged: false,
				accessToken: null
			}
		});
	}
}
