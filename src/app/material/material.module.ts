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
	materialModule.MatToolbarModule
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
