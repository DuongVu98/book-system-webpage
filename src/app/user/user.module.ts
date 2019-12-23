import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { MaterialModule } from "../material/material.module";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./user.routes";
import { LoginComponent } from "./login/login.component";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserBooksComponent } from './user-books/user-books.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

@NgModule({
	declarations: [UserDashboardComponent, LoginComponent, UserBooksComponent, UserProfileComponent, UserSettingsComponent],
	imports: [CommonModule, MaterialModule, RouterModule.forChild(userRoutes), MDBBootstrapModule],
	exports: [UserDashboardComponent]
})
export class UserModule {}
