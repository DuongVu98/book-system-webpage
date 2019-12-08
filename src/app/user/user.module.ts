import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { MaterialModule } from "../material/material.module";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./user.routes";

@NgModule({
	declarations: [UserDashboardComponent],
	imports: [CommonModule, MaterialModule, RouterModule.forChild(userRoutes)],
	exports: [UserDashboardComponent]
})
export class UserModule {}
