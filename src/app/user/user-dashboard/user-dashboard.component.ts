import { Component, OnInit } from "@angular/core";

@Component({
	selector: "user-dashboard",
	templateUrl: "./user-dashboard.component.html",
	styleUrls: ["./user-dashboard.component.css"]
})
export class UserDashboardComponent implements OnInit {
	showSideMenu: boolean;

	constructor() {
		this.showSideMenu = true;
	}

	ngOnInit() {}

	showSideMenuToggle(){
		this.showSideMenu = !this.showSideMenu;
	}
}
