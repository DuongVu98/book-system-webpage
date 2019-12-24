import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TemplateModule } from "./template/template.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { UserModule } from "./user/user.module";
import { BookApiService } from "./book/book-api.service";
import { UserAuthenticationService } from "./service/user-authentication.service";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./state/app.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		TemplateModule,
		UserModule,
		FormsModule,
		BrowserAnimationsModule,
		MaterialModule,
		RouterModule.forRoot(appRoutes, { useHash: true }),
		StoreModule.forRoot(reducers, {
			metaReducers
		}),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production
		})
	],
	providers: [BookApiService, UserAuthenticationService],
	bootstrap: [AppComponent]
})
export class AppModule {}
