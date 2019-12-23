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
import { MdbootstrapModule } from "../mdbootstrap/mdbootstrap.module";
import { BookModule } from "../book/book.module";
import { BooksListComponent } from "./books-list/books-list.component";
import { BookCardComponent } from "./book-card/book-card.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	declarations: [
		HomePageComponent,
		NavBarComponent,
		ContentComponent,
		FootBarComponent,
		WelcomePageComponent,
		PageNotFoundComponent,
		BooksListComponent,
		BookCardComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		MdbootstrapModule,
		HttpClientModule,
		BookModule,
		RouterModule.forChild(templateRoutes)
	],
	exports: [HomePageComponent, WelcomePageComponent]
})
export class TemplateModule {}
