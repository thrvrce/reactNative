export enum AnimatedSubmitButtonState {
  initial = 'initial',
  pending = 'pending',
  error = 'error',
}

export enum PendingSubStages {
  Shrink = 'pendingShrink',
  Dots = 'pendingDots',
}

export enum ErrorSubStages {
  Cross = 'errorCross',
  Message = 'errorMessage',
}

export enum StagesWithoutSubStages {
  initial = 'initial',
}

export const AnimationInnerStages = {
  StagesWithoutSubStages,
  PendingSubStages,
  ErrorSubStages,
};

export type AnimationInnerStages =
  | PendingSubStages
  | ErrorSubStages
  | StagesWithoutSubStages;

export interface IAnimatedSubmitButton {
  state: AnimatedSubmitButtonState;
  initialStateText: string;
  errorStateText: string;
  submitHandler: () => void;
}
