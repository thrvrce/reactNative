import React, {FC} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  ScrollView,
  ImageProps,
} from 'react-native';
import {TopBar} from '../../reusableComponents/TopBar/TopBar';
import {Prices} from '../../reusableComponents/Prices/Prices';
import {ProductImagesSlider} from '../../reusableComponents/ProductImagesSlider/ProductImagesSlider';
import {textStyles} from '../../reusabeStyles/textStyles';
import LeftArrow from '../../../icons/LeftArrow.svg';
import HeartIcon from '../../../icons/HeartIcon.svg';
import BucketIcon from '../../../icons/BucketIcon.svg';
import ImgSrcMock from '../../../Img/XiaomiDescription.png';

interface IProductDetailsProps {
  imgSrc: ImageProps;
  name: string;
  sourcePrice: number;
  priceDiffPercents: number;
  priceDiff: number;
}

export const ProductDetails: FC<IProductDetailsProps> = props => {
  const {
    // imgSrc ,
    name,
    sourcePrice,
    priceDiffPercents,
    priceDiff,
  } = props;
  return (
    <>
      <TopBar
        leftBlock={<LeftArrow />}
        rightBlock={[<HeartIcon style={{marginRight: 25}} />, <BucketIcon />]}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ProductImagesSlider imgSrc={ImgSrcMock} />
        <View style={styles.pricesBlock}>
          <Text style={textStyles.commonText}>{name}</Text>
          <Prices
            sourcePrice={sourcePrice}
            priceDiffPercents={priceDiffPercents}
            priceDiff={priceDiff}
          />
        </View>
        <View style={styles.selectColorBlock}>
          <Text style={[textStyles.commonText, styles.selectColorBlockTitle]}>
            Select color
          </Text>
          <View style={styles.colorSelector}>
            <Text style={[textStyles.commonText, styles.colorText]}>Blue</Text>
          </View>
        </View>
        <View style={styles.descriptionBlock}>
          <Text style={[textStyles.commonText, styles.descriptionBlockTitle]}>
            Description
          </Text>
          <Text style={[textStyles.commonText, styles.descriptionBlockText]}>
            The phone features a 6.088 inch HD+ (1560 x 720 pixel) resolution,
            283ppi Super AMOLED display, a glass and plastic body, with Corning
            Gorilla Glass 5 protection on its front as well as its back. It is
            powered by a Qualcomm Snapdragon 665 SoC
          </Text>
        </View>
      </ScrollView>
      <View style={styles.addToCartButton}>
        <Button
          title="ADD TO CART"
          color="#008ACE"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainerWrapper: {alignItems: 'center', backgroundColor: '#FFF'},

  pricesBlock: {
    height: 70,
    paddingBottom: 20,
    justifyContent: 'space-evenly',
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#8F8F8F',
  },
  selectColorBlock: {
    height: 90,
    paddingTop: 5,
    paddingBottom: 25,
    justifyContent: 'space-evenly',
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#8F8F8F',
  },
  selectColorBlockTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  colorSelector: {
    backgroundColor: '#F7F7F7',
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorText: {
    color: '#4A4A4A',
  },
  descriptionBlock: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  descriptionBlockTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  descriptionBlockText: {
    color: '#4A4A4A',
  },
  addToCartButton: {
    width: 335,
    height: 40,
    borderRadius: 4,
    alignSelf: 'center',
  },
});
