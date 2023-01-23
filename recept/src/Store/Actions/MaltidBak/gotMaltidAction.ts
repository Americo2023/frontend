import { MaltidModel } from "../../../Models/MaltidModel";

export const GOTMALTID = "GotMaltid";

export const gotMaltidAction = (maltid: MaltidModel[]) =>
	({ type: GOTMALTID, maltid: maltid } as const);
