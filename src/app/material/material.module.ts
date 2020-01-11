import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as materialModule from "@angular/material";

const material = [
	materialModule.MatInputModule,
	materialModule.MatGridListModule,
	materialModule.MatDialogModule,
	materialModule.MatTabsModule,
	materialModule.MatFormFieldModule,
	materialModule.MatButtonModule,
	materialModule.MatToolbarModule,
	materialModule.MatSidenavModule,
	materialModule.MatListModule,
	materialModule.MatButtonModule,
	materialModule.MatGridListModule,
	materialModule.MatCardModule,
	materialModule.MatFormFieldModule,
	materialModule.MatInputModule
];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		material
	],
	exports: [
		material
	]
})
export class MaterialModule {}
