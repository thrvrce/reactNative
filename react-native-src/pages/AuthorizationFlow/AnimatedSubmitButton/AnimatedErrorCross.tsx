import React, {FC, useEffect, useState, useRef} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

const Line: FC = () => <View style={styles.line} />;

interface IAnimatedErrorCross {
  animationEndCallback?: () => void;
}

export const AnimatedErrorCross: FC<IAnimatedErrorCross> = props => {
  const {animationEndCallback} = props;
  const [firstLineWidth, setFirstLineWidth] = useState(0);
  const [secondLineWidth, setSecondLineWidth] = useState(0);
  const firstRender = useRef(true);
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const calculateLineWrapperXPosition = (lineWidth: number) => -lineWidth * 0.5;
  const currentComponentRef = useRef(null);
  const lineMaxLength = 80;
  const lineDrawSpeed = 10;
  const lineGrowInterval = 20;

  const extendLine = (
    lineLengthSetter: React.Dispatch<React.SetStateAction<number>>,
    customInterval = lineGrowInterval,
  ) => {
    setTimeout(() => {
      if (currentComponentRef.current) {
        lineLengthSetter(
          (currentWidth: number) => currentWidth + lineDrawSpeed,
        );
      }
    }, customInterval);
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      extendLine(setFirstLineWidth, 500);
    }
    if (firstLineWidth < lineMaxLength) {
      extendLine(setFirstLineWidth);
    }
    if (firstLineWidth >= lineMaxLength && secondLineWidth < lineMaxLength) {
      extendLine(setSecondLineWidth);
    }
  }, [firstLineWidth, secondLineWidth]);

  useEffect(() => {
    if (firstLineWidth > lineMaxLength && secondLineWidth > lineMaxLength) {
      Animated.sequence([
        Animated.timing(shakeAnimation, {
          useNativeDriver: true,
          toValue: 3,
          duration: 10,
        }),
        Animated.timing(shakeAnimation, {
          useNativeDriver: true,
          toValue: -3,
          duration: 10,
        }),
        Animated.timing(shakeAnimation, {
          useNativeDriver: true,
          toValue: 3,
          duration: 10,
        }),
        Animated.timing(shakeAnimation, {
          useNativeDriver: true,
          toValue: 0,
          duration: 10,
        }),
      ]).start(animationEndCallback);
    }
  });

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {transform: [{translateX: shakeAnimation}, {scale: 0.8}]},
      ]}
      ref={currentComponentRef}>
      <View style={styles.linesContainer}>
        <View
          style={[
            styles.lineWrapper,
            {
              width: firstLineWidth,
              transform: [
                {
                  translateX: calculateLineWrapperXPosition(firstLineWidth),
                },
                {
                  rotate: '45deg',
                },
              ],
            },
          ]}>
          <Line />
        </View>
        <View
          style={[
            styles.lineWrapper,
            {
              width: secondLineWidth,
              transform: [
                {
                  translateX:
                    calculateLineWrapperXPosition(secondLineWidth) +
                    styles.wrapper.width -
                    styles.wrapper.padding * 2,
                },
                {
                  rotate: '135deg',
                },
              ],
            },
          ]}>
          <Line />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 40,
    padding: 5,
    borderRadius: 4,
    backgroundColor: '#ff4f67',
  },
  linesContainer: {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: '100%',
    transform: [{scale: 0.5}],
  },
  lineWrapper: {
    position: 'absolute',
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  line: {
    height: 4,
    borderRadius: 5,
  },
});
