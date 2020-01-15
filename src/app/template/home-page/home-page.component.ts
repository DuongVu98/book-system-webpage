import { Component, OnInit } from "@angular/core";
import { UserStateService } from "src/app/service/user-state.service";

@Component({
	selector: "template-home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
	private userIsLogged: boolean;

	constructor(private userStateService: UserStateService) {
		this.userIsLogged = false;
	}

	ngOnInit() {
		this.userStateService.checkLoginFromState().then(userIsLogged => {
			console.log("user is logged or not --> " + userIsLogged);
			if (userIsLogged) {
				this.userIsLogged = true;
			}
		});
	}
}
