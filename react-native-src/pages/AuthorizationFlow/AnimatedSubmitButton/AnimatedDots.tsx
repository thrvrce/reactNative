import React, {FC, useEffect, useRef} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

const Dot: FC = () => <View style={styles.dot} />;

export const AnimatedDots: FC = () => {
  const animatedDot1 = useRef(new Animated.Value(0)).current;
  const animatedDot2 = useRef(new Animated.Value(0)).current;
  const animatedDot3 = useRef(new Animated.Value(0)).current;
  const dotAnimationDuration = 300;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedDot1, {
          toValue: -10,
          duration: dotAnimationDuration,
          useNativeDriver: true,
        }),
        Animated.parallel([
          Animated.timing(animatedDot2, {
            toValue: -10,
            duration: dotAnimationDuration,
            useNativeDriver: true,
          }),
          Animated.timing(animatedDot1, {
            toValue: 0,
            duration: dotAnimationDuration,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(animatedDot3, {
            toValue: -10,
            duration: dotAnimationDuration,
            useNativeDriver: true,
          }),
          Animated.timing(animatedDot2, {
            toValue: 0,
            duration: dotAnimationDuration,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(animatedDot3, {
          toValue: 0,
          duration: dotAnimationDuration,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [animatedDot1, animatedDot2, animatedDot3]);

  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={{
          transform: [
            {
              translateY: animatedDot1,
            },
          ],
        }}>
        <Dot />
      </Animated.View>
      <Animated.View
        style={{
          transform: [
            {
              translateY: animatedDot2,
            },
          ],
        }}>
        <Dot />
      </Animated.View>
      <Animated.View
        style={{
          transform: [
            {
              translateY: animatedDot3,
            },
          ],
        }}>
        <Dot />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#008ACE',
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 2,
  },
});
