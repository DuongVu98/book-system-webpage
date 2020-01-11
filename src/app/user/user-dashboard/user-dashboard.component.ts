import { Component, OnInit } from "@angular/core";
import { UserStateService } from 'src/app/service/user-state.service';

@Component({
	selector: "user-dashboard",
	templateUrl: "./user-dashboard.component.html",
	styleUrls: ["./user-dashboard.component.css"]
})
export class UserDashboardComponent implements OnInit {
	showSideMenu: boolean;

	constructor(private userStateService: UserStateService) {
	}

	ngOnInit() {
		this.showSideMenu = true;
	}

	showSideMenuToggle(){
		this.showSideMenu = !this.showSideMenu;
	}

	logoutButtonClick(){
		this.userStateService.deleteUserFromStore();
		window.location.reload();
	}
}
