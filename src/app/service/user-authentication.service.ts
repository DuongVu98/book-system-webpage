import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class UserAuthenticationService {
	private host = environment.localGatewayHost;
	private loginUrl = `${this.host}/api/user/login`;
	private loginParametersUrl;

	constructor(private httpClient: HttpClient) {}

	login(user) {
		this.loginParametersUrl =
			this.loginUrl + "/" + user.username + "/" + user.password;
		return this.httpClient.get(this.loginParametersUrl);
	}
}