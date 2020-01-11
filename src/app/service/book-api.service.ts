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

	constructor(
		private httpClient: HttpClient,
		private userStateService: UserStateService
	) {}

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

	async prePostBook(inputData){
		let modifiedData;
		await this.userStateService.getUserFromState().then(user => {
			modifiedData = {
				...inputData,
				userId: user.id
			}
		});

		return modifiedData;
	}
	postBook(inputData): Observable<Book> {
		// return this.httpClient.post<any>(
		// 	`${this.host}/api/user/add-book`,
		// 	this.prePostBook(inputData)
		// );
		console.log("modified data - "+this.prePostBook(inputData));
		return null;
	}
}
