import { Component, OnInit } from "@angular/core";
import { UserStateService } from "src/app/service/user-state.service";
import { BookApiService } from "src/app/service/book-api.service";

@Component({
	selector: "user-books",
	templateUrl: "./user-books.component.html",
	styleUrls: ["./user-books.component.css"]
})
export class UserBooksComponent implements OnInit {
	private userBooks;

	constructor(
		private userStateService: UserStateService,
		private bookApiService: BookApiService
	) {}

	ngOnInit() {
		this.userStateService.getUserIdFromState().then(id => {
			this.bookApiService.getPostedBooks(id).subscribe(books => {
				this.userBooks = books;
			});
		});
	}
}
