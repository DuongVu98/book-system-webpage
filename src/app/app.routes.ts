import { Routes } from "@angular/router";
import { WelcomePageComponent } from "./template/welcome-page/welcome-page.component";
import { PageNotFoundComponent } from "./template/page-not-found/page-not-found.component";

export const appRoutes: Routes = [
	{ path: "", component: WelcomePageComponent },
	{ path: "**", component: PageNotFoundComponent }
];
