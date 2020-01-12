import { Component, OnInit } from "@angular/core";
import { BookApiService } from "src/app/service/book-api.service";
import { MatDialogRef } from "@angular/material";
import { BookPresenterService } from "src/app/service/book-presenter.service";

@Component({
	selector: "user-add-book-dialog",
	templateUrl: "./add-book-dialog.component.html",
	styleUrls: ["./add-book-dialog.component.css"]
})
export class AddBookDialogComponent implements OnInit {
	private newBook;

	constructor(
		private bookApiService: BookApiService,
		private matDialogRef: MatDialogRef<AddBookDialogComponent>,
		private bookPresenterService: BookPresenterService
	) {
		this.newBook = {
			title: null,
			author: null,
			number: null
		};
	}

	ngOnInit() {}

	async addBook() {
		this.bookPresenterService.bookPresenter(this.newBook).then(data => {
			console.log("modified data - " + JSON.stringify(data));
			this.bookApiService.postBook(data).subscribe(
				newBook => {
					console.log(newBook);
				},
				err => {
					console.log(err);
				}
			);
		});
	}

	onClose() {
		this.matDialogRef.close();
	}
}
