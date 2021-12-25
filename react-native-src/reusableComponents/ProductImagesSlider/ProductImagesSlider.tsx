import React, {FC} from 'react';
import {View, StyleSheet, Image, ImageProps} from 'react-native';
import SliderArrowLeft from '../../../icons/SliderArrowLeft.svg';
import SliderArrowRight from '../../../icons/SliderArrowRight.svg';

interface IProductImagesSliderProps {
  imgSrc: ImageProps;
}
export const ProductImagesSlider: FC<IProductImagesSliderProps> = props => {
  const {imgSrc} = props;
  return (
    <View>
      <View style={styles.sliderWrapper}>
        <SliderArrowLeft />
        <Image style={styles.image} source={imgSrc} />
        <SliderArrowRight />
      </View>
      <View style={styles.sliderDotWrapper}>
        <View style={styles.sliderDot} />
        <View style={[styles.sliderDot, styles.sliderDotActive]} />
        <View style={styles.sliderDot} />
        <View style={styles.sliderDot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderWrapper: {
    marginTop: 43,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 5,
    marginLeft: 24,
    marginRight: 24,
  },
  sliderDotWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  sliderDot: {
    backgroundColor: '#C3C3C3',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 2,
    marginRight: 3,
  },
  sliderDotActive: {
    backgroundColor: '#008ACE',
  },
});
