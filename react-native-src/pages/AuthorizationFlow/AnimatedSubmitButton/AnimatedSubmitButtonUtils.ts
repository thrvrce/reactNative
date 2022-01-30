import {
  AnimationInnerStages,
  PendingSubStages,
  ErrorSubStages,
  StagesWithoutSubStages,
} from './AnimatedSubmitButtonTypes';

const applyInStages = (
  currentAnimationInnerStage: AnimationInnerStages,
  animationStagesToCheck: AnimationInnerStages[],
) => animationStagesToCheck.includes(currentAnimationInnerStage);

export const getAnimatedPropertiesConfig = (
  currentAnimationInnerStage: AnimationInnerStages,
  initialStateText: string,
  errorStateText: string,
) => {
  let signUpButtonText = initialStateText;
  let processStatusWrapperWidth = 335;
  if (applyInStages(currentAnimationInnerStage, [ErrorSubStages.Message])) {
    signUpButtonText = errorStateText;
    processStatusWrapperWidth = 235;
  } else if (
    applyInStages(currentAnimationInnerStage, [
      PendingSubStages.Shrink,
      PendingSubStages.Dots,
      ErrorSubStages.Cross,
    ])
  ) {
    signUpButtonText = '';
    processStatusWrapperWidth = 40;
  }
  const showDotsAnimationComponent = applyInStages(currentAnimationInnerStage, [
    PendingSubStages.Dots,
  ]);
  const showErrorCrossAnimationComponent = applyInStages(
    currentAnimationInnerStage,
    [ErrorSubStages.Cross, ErrorSubStages.Message],
  );

  let processStatusWrapperBackgroundColor = '#008ACE';
  if (applyInStages(currentAnimationInnerStage, [ErrorSubStages.Message])) {
    processStatusWrapperBackgroundColor = '#fea1ad';
  } else if (
    applyInStages(currentAnimationInnerStage, [ErrorSubStages.Cross])
  ) {
    processStatusWrapperBackgroundColor = 'transparent';
  }

  const showPressableText = applyInStages(currentAnimationInnerStage, [
    StagesWithoutSubStages.initial,
    ErrorSubStages.Message,
  ]);

  const showAdditionalAnimationBlock = applyInStages(
    currentAnimationInnerStage,
    [PendingSubStages.Dots, ErrorSubStages.Cross, ErrorSubStages.Message],
  );

  const additionalAnimationBlockWidth = applyInStages(
    currentAnimationInnerStage,
    [StagesWithoutSubStages.initial, PendingSubStages.Shrink],
  )
    ? 0
    : 40;

  return {
    processStatusWrapperWidth,
    processStatusWrapperBackgroundColor,
    signUpButtonText,
    showDotsAnimationComponent,
    showErrorCrossAnimationComponent,
    showPressableText,
    showAdditionalAnimationBlock,
    additionalAnimationBlockWidth,
  };
};
