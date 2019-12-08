import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ContentComponent } from "./content/content.component";
import { FootBarComponent } from "./foot-bar/foot-bar.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
	declarations: [
		HomePageComponent,
		NavBarComponent,
		ContentComponent,
		FootBarComponent
	],
	imports: [CommonModule, MaterialModule],
	exports: [HomePageComponent]
})
export class TemplateModule {}
