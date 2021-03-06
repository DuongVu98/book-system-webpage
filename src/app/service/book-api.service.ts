import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "../models/book.model";
import { environment } from "../../environments/environment";
import { UserStateService } from "./user-state.service";

@Injectable({
	providedIn: "root"
})
export class BookApiService {
	private host = environment.localGatewayHost;
	private accessToken: string;
	private inputData;

	constructor(
		private httpClient: HttpClient,
		private userStateService: UserStateService
	) {
		this.userStateService.getAccessTokenFromState().then(token => {
			this.accessToken = token;
		});
	}

	setHeader(): HttpHeaders {
		return new HttpHeaders({
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "*",
			"Authorization": "Bearer " + this.accessToken
		});
	}

	getBooks(): Observable<Book[]> {
		return this.httpClient.get<Book[]>(`${this.host}/api/user/books-list`, {
			headers: this.setHeader()
		});
	}

	getPostedBooks(id): Observable<Book[]> {
		return this.httpClient.get<Book[]>(
			`${this.host}/api/profile/posted-books/${id}`,
			{
				headers: this.setHeader()
			}
		);
	}

	postBook(inputData) {
		console.log("before post - " + JSON.stringify(inputData));
		return this.httpClient.post<any>(
			`${this.host}/api/user/add-book`,
			inputData
		);
	}
}
