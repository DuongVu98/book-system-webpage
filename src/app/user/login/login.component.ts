import { Component, OnInit } from "@angular/core";
import { UserAuthenticationService } from "src/app/service/user-authentication.service";
import { Router } from "@angular/router";

@Component({
	selector: "user-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
	private loginInput;
	private loggedUser;
	private user;

	constructor(
		private userAuthenticationService: UserAuthenticationService,
		private router: Router
	) {
		this.loggedUser = false;
		this.loginInput = {
			username: null,
			password: null
		};
		this.user = null;
	}

	ngOnInit() {}

	login() {
		this.user = this.userAuthenticationService.login(this.loginInput);

		if (this.user != null) {
			this.loggedUser = true;
		} else {
			this.loggedUser = false;
		}
	}
}
