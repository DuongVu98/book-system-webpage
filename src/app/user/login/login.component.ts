import { Component, OnInit } from "@angular/core";
import { UserAuthenticationService } from "src/app/service/user-authentication.service";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { User } from "src/app/models/user.model";

@Component({
	selector: "user-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
	private loginInput;
	private loggedUser: User;
	private isLogged: boolean;
	private error: boolean;

	constructor(
		private userAuthenticationService: UserAuthenticationService,
		private router: Router,
		private store: Store<any>
	) {
		this.isLogged = false;
		this.loginInput = {
			username: null,
			password: null
		};
		this.loggedUser = new User();
	}

	ngOnInit() {
		this.store.pipe(select("user")).subscribe(users => {
			if (users) {
				if (users.isLogged === true) {
					this.router.navigate(["/home"]);
				}
			}
		});
	}

	login() {
		this.userAuthenticationService.login(this.loginInput).subscribe(
			res => {
				this.loggedUser = res;
				this.stateStoring(this.loggedUser);
				this.router.navigate(["/home"]);
			},
			err => {
				if (err.status === 401) {
					this.error = true;
				}
			}
		);
	}

	stateStoring(user: User) {
		this.store.dispatch({
			type: "LOGIN",
			payload: {
				user: user,
				isLogged: true
			}
		});
	}
}
