import { Component, OnInit } from "@angular/core";
import { BookApiService } from "src/app/service/book-api.service";
import { MatDialogRef } from "@angular/material";

@Component({
	selector: "user-add-book-dialog",
	templateUrl: "./add-book-dialog.component.html",
	styleUrls: ["./add-book-dialog.component.css"]
})
export class AddBookDialogComponent implements OnInit {
	private newBook;

	constructor(
		private bookApiService: BookApiService,
		private matDialogRef: MatDialogRef<AddBookDialogComponent>
	) {
		this.newBook = {
			title: null,
			author: null,
			number: null
		};
	}

	ngOnInit() {}

	async addBook() {
		await this.bookApiService.postBook(this.newBook).subscribe(book => {
			console.log(book);
			return book;
		});
	}

	onClose() {
		this.matDialogRef.close();
	}
}
