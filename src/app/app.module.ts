import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TemplateModule } from "./template/template.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { UserModule } from "./user/user.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		TemplateModule,
		UserModule,
		BrowserAnimationsModule,
		MaterialModule,
		RouterModule.forRoot(appRoutes, { useHash: true })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
