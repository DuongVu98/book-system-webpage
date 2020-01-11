import { Component, OnInit, Input } from "@angular/core";
import { UserStateService } from "src/app/service/user-state.service";

@Component({
	selector: "template-nav-bar",
	templateUrl: "./nav-bar.component.html",
	styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
	@Input()
	private userIsLogged: boolean;

	constructor(private userStateService: UserStateService) {}
	ngOnInit() {}

	logoutButtonClick() {
		this.userStateService.deleteUserFromStore();
		window.location.reload();
	}
}
