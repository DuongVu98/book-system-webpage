import { Component, OnInit } from "@angular/core";
import { BookApiService } from "src/app/service/book-api.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AddBookDialogComponent } from "./add-book-dialog/add-book-dialog.component";

@Component({
	selector: "user-posted-books",
	templateUrl: "./user-posted-books.component.html",
	styleUrls: ["./user-posted-books.component.css"]
})
export class UserPostedBooksComponent implements OnInit {
	constructor(
		private bookApiService: BookApiService,
		private matDialog: MatDialog
	) {}

	ngOnInit() {}

	async addBook() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.width = "60%";
		this.matDialog.open(AddBookDialogComponent, dialogConfig);
	}
}
