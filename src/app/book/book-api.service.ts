import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BookApiService {
	private host = process.env.LOCAL_GATEWAY_HOST;

	constructor(private httpClient: HttpClient) {}

	getBooks() {
		return this.httpClient.get(`${this.host}/api/user/books-list`);
	}
}
