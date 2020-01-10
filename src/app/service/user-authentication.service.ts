import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { Store, select } from "@ngrx/store";

@Injectable({
	providedIn: "root"
})
export class UserAuthenticationService {
	private host = environment.localGatewayHost;
	private loginUrl = `${this.host}/api/login`;
	private loginParametersUrl;

	private userIsLogged = false;
	private loggedUserFromState: User;

	constructor(private httpClient: HttpClient, private store: Store<any>) {}

	async checkLogin(): Promise<boolean> {
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

	login(user): Observable<User> {
		this.loginParametersUrl =
			this.loginUrl + "/" + user.username + "/" + user.password;
		return this.httpClient.get<User>(this.loginParametersUrl);
	}
}
