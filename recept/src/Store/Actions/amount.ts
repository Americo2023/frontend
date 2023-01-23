import { AmountResponseModel } from "../../Models/AmountResponseModel";

export const GETTINGAMOUNT = "GettingAmount";
export const gettingAmountAction = () => ({ type: GETTINGAMOUNT } as const);

export const GOTAMOUNT = "GotAmount";
export const gotAmountAction = (amounts: AmountResponseModel[]) =>
	({ type: GOTAMOUNT, amounts: amounts } as const);
