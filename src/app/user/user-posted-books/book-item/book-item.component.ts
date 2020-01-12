import { Component, OnInit, Input } from "@angular/core";
import { Book } from "src/app/models/book.model";

@Component({
	selector: "user-book-item",
	templateUrl: "./book-item.component.html",
	styleUrls: ["./book-item.component.css"]
})
export class BookItemComponent implements OnInit {
	@Input()
	private book;

	constructor() {}

	ngOnInit() {}
}
