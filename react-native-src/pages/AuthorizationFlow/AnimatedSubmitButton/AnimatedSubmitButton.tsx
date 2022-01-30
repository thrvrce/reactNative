import React, {FC, useState, useEffect} from 'react';
import {StyleSheet, View, LayoutAnimation} from 'react-native';
import {AnimatedDots} from './AnimatedDots';
import {AnimatedErrorCross} from './AnimatedErrorCross';
import {PressableText} from './PressableText';
import {getAnimatedPropertiesConfig} from './AnimatedSubmitButtonUtils';
import {
  IAnimatedSubmitButton,
  AnimationInnerStages,
  PendingSubStages,
  ErrorSubStages,
  AnimatedSubmitButtonState,
} from './AnimatedSubmitButtonTypes';

export const AnimatedSubmitButton: FC<IAnimatedSubmitButton> = props => {
  const {state, initialStateText, errorStateText, submitHandler} = props;
  const [animationInnerStage, setAnimationInnerStage] =
    useState<AnimationInnerStages>(
      AnimationInnerStages.StagesWithoutSubStages.initial,
    );
  const {
    processStatusWrapperWidth,
    processStatusWrapperBackgroundColor,
    signUpButtonText,
    showDotsAnimationComponent,
    showErrorCrossAnimationComponent,
    showPressableText,
    showAdditionalAnimationBlock,
    additionalAnimationBlockWidth,
  } = getAnimatedPropertiesConfig(
    animationInnerStage,
    initialStateText,
    errorStateText,
  );

  const showPendingAnimation = () => {
    setAnimationInnerStage(PendingSubStages.Shrink);
    LayoutAnimation.configureNext(
      {
        duration: 300,
        update: {type: 'linear'},
      },
      () => {
        LayoutAnimation.configureNext({
          duration: 300,
          create: {type: 'linear', property: 'opacity'},
        });
        setAnimationInnerStage(PendingSubStages.Dots);
      },
    );
  };
  const showErrorAnimation = () => {
    setAnimationInnerStage(ErrorSubStages.Cross);
  };

  const setErrorAnimationNextStage = () => {
    LayoutAnimation.configureNext({
      duration: 300,
      create: {type: 'linear', property: 'opacity'},
      update: {type: 'linear'},
      delete: {type: 'linear', property: 'opacity'},
    });
    setAnimationInnerStage(ErrorSubStages.Message);
  };

  const PressableTextOnPressHandler = () => {
    showPendingAnimation();
    submitHandler();
  };

  useEffect(() => {
    if (state === AnimatedSubmitButtonState.pending) {
      showPendingAnimation();
    } else if (state === AnimatedSubmitButtonState.error) {
      showErrorAnimation();
    }
  }, [state]);

  return (
    <View
      style={[
        styles.processStatusWrapper,
        {
          width: processStatusWrapperWidth,
          backgroundColor: processStatusWrapperBackgroundColor,
        },
      ]}>
      {showPressableText && (
        <PressableText
          onPressHandler={PressableTextOnPressHandler}
          signUpButtonText={signUpButtonText}
        />
      )}
      {showAdditionalAnimationBlock && (
        <View
          style={{
            width: additionalAnimationBlockWidth,
          }}>
          {showDotsAnimationComponent && <AnimatedDots />}
          {showErrorCrossAnimationComponent && (
            <AnimatedErrorCross
              animationEndCallback={setErrorAnimationNextStage}
            />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  processStatusWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 40,
    borderRadius: 4,
  },
});
