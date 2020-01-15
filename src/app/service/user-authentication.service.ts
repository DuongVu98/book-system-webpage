import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { Store, select } from "@ngrx/store";
import { LoginResponse } from "../models/login-response.model";

@Injectable({
	providedIn: "root"
})
export class UserAuthenticationService {
	private host = environment.localGatewayHost;
	private loginUrl = `${this.host}/auth/login`;
	private loginParametersUrl;

	private userIsLogged = false;
	private loggedUserFromState: User;

	constructor(private httpClient: HttpClient, private store: Store<any>) {}

	setHeader(): HttpHeaders {
		return new HttpHeaders({
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "*"
		});
	}

	// login(user): Observable<User> {
	// 	this.loginParametersUrl =
	// 		this.loginUrl + "/" + user.username + "/" + user.password;
	// 	return this.httpClient.get<User>(this.loginParametersUrl);
	// }

	login(user): Observable<LoginResponse> {
		console.log(user);
		return this.httpClient.post<any>(
			this.loginUrl,
			{ username: user.username, password: user.password },
			{ headers: this.setHeader() }
		);
	}
}
