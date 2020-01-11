import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "../models/book.model";
import { User } from "../models/user.model";
import { environment } from "../../environments/environment";
import { UserStateService } from "./user-state.service";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class BookApiService {
	private host = environment.localGatewayHost;

	private inputData;

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
			`${this.host}/api/profile/posted-books`,
			{
				headers: this.setHeader()
			}
		);
	}

	prePostBook(inputData): Promise<string> {
		return this.userStateService.getUserIdFromState().then(id => {
			return {
				...inputData,
				userId: id
			};
		});
	}

	async prePostTest(inputData) {
		await this.userStateService.getUserIdFromState().then(id => {
			this.inputData = {
				...inputData,
				userId: id
			};
		});
	}
	postBook(inputData) {
		console.log("before post - "+JSON.stringify(inputData));
		return this.httpClient.post<any>(`${this.host}/api/user/add-book`, inputData);
	}
}
