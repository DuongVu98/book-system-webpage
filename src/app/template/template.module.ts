import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ContentComponent } from "./content/content.component";
import { FootBarComponent } from "./foot-bar/foot-bar.component";

@NgModule({
	declarations: [
		HomePageComponent,
		NavBarComponent,
		ContentComponent,
		FootBarComponent
	],
	imports: [CommonModule],
	exports: [HomePageComponent]
})
export class TemplateModule {}
