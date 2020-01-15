import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "user-books-list",
	templateUrl: "./books-list.component.html",
	styleUrls: ["./books-list.component.css"]
})
export class BooksListComponent implements OnInit {
	@Input()
	private books;

	constructor() {}

	ngOnInit() {}
}
