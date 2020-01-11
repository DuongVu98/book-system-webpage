import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { MaterialModule } from "../material/material.module";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./user.routes";
import { LoginComponent } from "./login/login.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { UserBooksComponent } from "./user-books/user-books.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";
import { UserPostedBooksComponent } from "./user-posted-books/user-posted-books.component";
import { UserOrderedBooksComponent } from "./user-ordered-books/user-ordered-books.component";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import * as fromUser from "./user-state/user.reducer";
import { AddBookDialogComponent } from './posted-books/add-book-dialog/add-book-dialog.component';

@NgModule({
	declarations: [
		UserDashboardComponent,
		LoginComponent,
		UserBooksComponent,
		UserProfileComponent,
		UserSettingsComponent,
		UserPostedBooksComponent,
		UserOrderedBooksComponent,
		AddBookDialogComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		StoreModule.forFeature("users", fromUser.userReducer),
		RouterModule.forChild(userRoutes),
		MDBBootstrapModule
	],
	exports: [UserDashboardComponent],
	entryComponents: [AddBookDialogComponent]
})
export class UserModule {}
