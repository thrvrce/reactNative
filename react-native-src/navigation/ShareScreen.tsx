import React from 'react';
import Share from 'react-native-share';
import ShareIcon from '../../icons/ShareIcon.svg';

export const drawerShareIcon = ({
  focused,
  size,
}: {
  focused: boolean;
  size: number;
}) => (
  <ShareIcon name="md-home" size={size} color={focused ? '#7cc' : '#ccc'} />
);

export const onShare = () => {
  Share.open({
    url: 'https://e-commerce.com',
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      err && console.log(err);
    });
};
