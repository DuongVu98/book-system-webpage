import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ContentComponent } from "./content/content.component";
import { FootBarComponent } from "./foot-bar/foot-bar.component";
import { MaterialModule } from "../material/material.module";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RouterModule } from "@angular/router";
import { templateRoutes } from "./template.routes";

@NgModule({
	declarations: [
		HomePageComponent,
		NavBarComponent,
		ContentComponent,
		FootBarComponent,
		WelcomePageComponent,
		PageNotFoundComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		RouterModule.forChild(templateRoutes)
	],
	exports: [HomePageComponent, WelcomePageComponent]
})
export class TemplateModule {}
