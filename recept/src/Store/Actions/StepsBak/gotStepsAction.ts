import { StepModel } from "../../../Models/StepModel";

export const GOTSTEPS = "GotSteps";
export const gotStepsAction = (steps: StepModel[]) =>
	({ type: GOTSTEPS, steps: steps } as const);
