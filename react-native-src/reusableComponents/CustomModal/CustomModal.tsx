import React, {ReactElement, FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {textStyles} from '../../reusableStyles/textStyles';

interface ICustomModal {
  icon: ReactElement;
  title: string;
  description: string;
  controls: ReactElement;
}

export const CustomModal: FC<ICustomModal> = props => {
  const {icon, title = '', description = '', controls} = props;

  return (
    <View style={modal.container}>
      <View style={modal.wrapper}>
        <View style={modal.icon}>{icon}</View>
        <Text style={[textStyles.commonText, modal.title]}>{title}</Text>
        <Text style={[textStyles.commonText, modal.description]}>
          {description}
        </Text>
        <View style={modal.controlsWrapper}>{controls}</View>
      </View>
    </View>
  );
};

const modal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
  },
  wrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingTop: 15,
    paddingRight: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    flex: 0.9,
    alignItems: 'center',
  },
  icon: {width: 85, height: 85, marginBottom: 10},
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#8F8F8F',
    marginBottom: 5,
  },
  description: {
    color: '#8F8F8F',
    marginBottom: 25,
  },
  controlsWrapper: {},
});
