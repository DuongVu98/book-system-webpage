import { Component, OnInit, Input } from "@angular/core";
import { BookApiService } from "src/app/service/book-api.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AddBookDialogComponent } from "./add-book-dialog/add-book-dialog.component";
import { Book } from 'src/app/models/book.model';

@Component({
	selector: "user-posted-books",
	templateUrl: "./user-posted-books.component.html",
	styleUrls: ["./user-posted-books.component.css"]
})
export class UserPostedBooksComponent implements OnInit {

	@Input()
	private userBooks: Book[];

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
