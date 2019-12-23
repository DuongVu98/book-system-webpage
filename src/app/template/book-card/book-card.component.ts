import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "template-book-card",
	templateUrl: "./book-card.component.html",
	styleUrls: ["./book-card.component.css"]
})
export class BookCardComponent implements OnInit {
	@Input()
	private book;

	constructor() {}

	ngOnInit() {}
}
