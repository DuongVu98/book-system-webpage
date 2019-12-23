import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "../models/book.model";
import { environment } from "../../environments/environment";

@Injectable({
	providedIn: "root"
})
export class BookApiService {
	private host = environment.localGatewayHost;

	constructor(private httpClient: HttpClient) {}

	setHeader(): HttpHeaders {
		return new HttpHeaders({
			"Content-Type": "application/json"
		});
	}

	getBooks(): Observable<Book[]> {
		return this.httpClient.get<Book[]>(`${this.host}/api/user/books-list`, {
			headers: this.setHeader()
		});
	}

	getPostedBooks(): Observable<Book[]> {
		return this.httpClient.get<Book[]>(
			`${this.host}/api/user/posted-books`,
			{
				headers: this.setHeader()
			}
		);
	}
}
