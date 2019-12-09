import { Routes } from "@angular/router";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { LoginComponent } from "./login/login.component";

export const userRoutes: Routes = [
	{ path: "profile", component: UserDashboardComponent },
	{ path: "login", component: LoginComponent }
];
