import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Store } from "@ngrx/store";

@Injectable({
	providedIn: "root"
})
export class UserStateService {
	private userIsLogged = false;
	private loggedUserFromState: User;

	constructor(private store: Store<any>) {}
}
