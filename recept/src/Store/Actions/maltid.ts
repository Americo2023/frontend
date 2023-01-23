import { MaltidModel } from "../../Models/MaltidModel";

export const GOTMALTID = "GotMaltid";
export const gotMaltidAction = (maltid: MaltidModel[]) =>
	({ type: GOTMALTID, maltid: maltid } as const);

export const GETTINGMALTID = "GettingMaltid";
export const gettingMaltidAction = () => ({ type: GETTINGMALTID } as const);
