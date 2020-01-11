import { Component, OnInit } from "@angular/core";
import { BookApiService } from "src/app/service/book-api.service";
import { Router } from "@angular/router";

@Component({
	selector: "template-books-list",
	templateUrl: "./books-list.component.html",
	styleUrls: ["./books-list.component.css"]
})
export class BooksListComponent implements OnInit {
	books: any;

	constructor(
		private bookApiService: BookApiService,
		private router: Router
	) {}

	ngOnInit() {
		this.bookApiService.getBooks().subscribe(
			res => {
				this.books = res;
			},
			err => {
				this.router.navigate(["/login"]);
			}
		);
	}
}
