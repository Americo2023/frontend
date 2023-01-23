import { StepModel } from "../../Models/StepModel";

export const GOTSTEPS = "GotSteps";
export const gotStepsAction = (steps: StepModel[]) =>
	({ type: GOTSTEPS, steps: steps } as const);

export const GETTINGSTEPS = "GettingSteps";
export const gettingStepsAction = () => ({ type: GETTINGSTEPS } as const);
