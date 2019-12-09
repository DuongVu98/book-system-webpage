import { Component, OnInit } from "@angular/core";

@Component({
	selector: "user-dashboard",
	templateUrl: "./user-dashboard.component.html",
	styleUrls: ["./user-dashboard.component.css"]
})
export class UserDashboardComponent implements OnInit {
	showSideMenu: boolean;

	constructor() {
	}

	ngOnInit() {
		this.showSideMenu = true;
	}

	showSideMenuToggle(){
		this.showSideMenu = !this.showSideMenu;
	}
}
