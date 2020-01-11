import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Store, select } from "@ngrx/store";

@Injectable({
	providedIn: "root"
})
export class UserStateService {
	private userIsLogged = false;
	private loggedUserFromState: User;

	constructor(private store: Store<any>) {}

	async checkLoginFromState(): Promise<boolean> {
		await this.store
			.pipe(select("users"))
			.subscribe(loggedUserFromState => {
				if (loggedUserFromState) {
					if (loggedUserFromState.isLogged === true) {
						this.userIsLogged = true;
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

	saveUserToStore(user: User) {
		this.store.dispatch({
			type: "LOGIN",
			payload: {
				user,
				isLogged: true
			}
		});
	}

	deleteUserFromStore() {
		this.store.dispatch({
			type: "LOGOUT"
		});
	}
}
