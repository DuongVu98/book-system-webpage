import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { MaterialModule } from "../material/material.module";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./user.routes";
import { LoginComponent } from "./login/login.component";
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
	declarations: [UserDashboardComponent, LoginComponent],
	imports: [CommonModule, MaterialModule, RouterModule.forChild(userRoutes), MDBBootstrapModule],
	exports: [UserDashboardComponent]
})
export class UserModule {}
