import { Component, OnInit } from "@angular/core";
import { UserAuthenticationService } from "src/app/service/user-authentication.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model";
import { UserStateService } from "src/app/service/user-state.service";
import { LoginResponse } from "src/app/models/login-response.model";

@Component({
	selector: "user-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
	private loginInput;
	private loggedUser: User;
	private loginResponse: LoginResponse;
	private isLogged: boolean;
	private error: boolean;

	constructor(
		private userAuthenticationService: UserAuthenticationService,
		private userStateService: UserStateService,
		private router: Router
	) {
		this.isLogged = false;
		this.loginInput = {
			username: null,
			password: null
		};
		this.loggedUser = new User();
	}

	ngOnInit() {
		this.userStateService.checkLoginFromState().then(userIsLogged => {
			if (userIsLogged) {
				this.userStateService.getUserFromState().then(user => {
					this.loggedUser = user;
					this.isLogged = true;
				});
				this.router.navigate(["/home"]);
			}
		});
	}

	login() {
		this.userAuthenticationService.login(this.loginInput).subscribe(
			res => {
				this.loginResponse = res;
				console.log(res);
				if (this.loginResponse.user != null) {
					this.loggedUser = res.user;
					this.userStateService.saveUserToStore(this.loggedUser, res.accessToken);
					this.router.navigate(["/home"]);
				}
			},
			err => {
				if (err.status === 401) {
					this.error = true;
				}
			}
		);
	}
}
