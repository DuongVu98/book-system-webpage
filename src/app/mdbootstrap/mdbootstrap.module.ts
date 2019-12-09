import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as mdbootStrap from "angular-bootstrap-md";
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const mdb = [mdbootStrap.ButtonsModule];

@NgModule({
	declarations: [],
	imports: [CommonModule, mdb, MDBBootstrapModule.forRoot()],
	exports: [mdb]
})
export class MdbootstrapModule {}
