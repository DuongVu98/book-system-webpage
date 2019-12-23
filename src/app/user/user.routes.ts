import { Routes } from "@angular/router";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { LoginComponent } from "./login/login.component";
import { UserBooksComponent } from "./user-books/user-books.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";

export const userRoutes: Routes = [
	{ path: "login", component: LoginComponent },
	{
		path: "profile",
		component: UserDashboardComponent,
		children: [
			{ path: "", redirectTo: "profile", pathMatch: "full" },
			{ path: "user-profile", component: UserProfileComponent },
			{ path: "user-books", component: UserBooksComponent },
			{ path: "user-settings", component: UserSettingsComponent }
		]
	}
];
