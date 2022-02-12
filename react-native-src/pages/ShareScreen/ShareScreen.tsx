import React from 'react';
import Share from 'react-native-share';
import {DrawerActions} from '@react-navigation/native';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import ShareIcon from '../../../icons/ShareIcon.svg';
import BurgerMenuIcon from '../../../icons/BurgerMenuIcon.svg';
import BucketIcon from '../../../icons/BucketIcon.svg';
import {TopBar} from '../../reusableComponents/TopBar/TopBar';
import {textStyles} from '../../reusableStyles/textStyles';

export const drawerShareIcon = ({
  focused,
  size,
}: {
  focused: boolean;
  size: number;
}) => (
  <ShareIcon name="md-home" size={size} color={focused ? '#7cc' : '#ccc'} />
);

export const ShareScreenNavigationHeader: React.FC<
  DrawerHeaderProps
> = props => (
  <TopBar
    leftBlock={
      <BurgerMenuIcon
        onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
      />
    }
    text="Share"
    rightBlock={<BucketIcon />}
  />
);

export const ShareScreen = () => {
  const [shareMessage, setShareMessage] = React.useState('');

  const onShare = () => {
    Share.open({
      message: shareMessage + '\n',
      url: 'https://e-commerce.com',
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <View>
      <Text style={textStyles.commonText}>Enter share message </Text>
      <TextInput
        style={styles.shareMessage}
        onChangeText={setShareMessage}
        value={shareMessage}
        keyboardType="default"
      />
      <View style={styles.shareButton}>
        <Button onPress={onShare} title="Share" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shareButton: {
    marginTop: 50,
  },
  shareMessage: {
    paddingLeft: 10,
    borderColor: '#8F8F8F',
    borderWidth: 1,
    borderRadius: 4,
  },
});
