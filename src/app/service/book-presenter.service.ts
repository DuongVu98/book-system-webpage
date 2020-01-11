import { Injectable } from "@angular/core";
import { UserStateService } from "./user-state.service";

@Injectable({
	providedIn: "root"
})
export class BookPresenterService {
	constructor(private userStateService: UserStateService) {}

	bookPresenter(inputData) {
		return this.userStateService.getUserIdFromState().then(id => {
			return {
				...inputData,
				userId: id
			};
		});
	}
}
