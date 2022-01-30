import React, {FC, useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  ActivityIndicator,
  Button,
} from 'react-native';
import {
  AppContext,
  globalErrorModalDefaultState,
} from '../AppContext/AppContext';
import {textStyles} from '../reusableStyles/textStyles';

export const GlobalErrorModal: FC = () => {
  const {globalModalErrorState, changeGlobalErrorModalState} =
    useContext(AppContext);
  const {
    showGlobalErrorModal,
    actionButtonFunction,
    actionButtonText,
    errorMessage,
  } = globalModalErrorState;
  const [actionProcessing, changeActionProcessingState] = useState(false);
  const actionButtonHandler = async () => {
    changeActionProcessingState(true);
    const actionResult = await actionButtonFunction();
    if (actionResult) {
      changeGlobalErrorModalState(globalErrorModalDefaultState);
    }
    changeActionProcessingState(false);
  };
  const resetGlobalErrorModalState = () => {
    changeGlobalErrorModalState(globalErrorModalDefaultState);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showGlobalErrorModal}
      onRequestClose={resetGlobalErrorModalState}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {actionProcessing ? (
            <ActivityIndicator size="large" color="#008ACE" />
          ) : (
            <>
              <Text style={[textStyles.commonText, styles.modalText]}>
                {errorMessage}
              </Text>
              <View style={styles.button}>
                <Button
                  title={actionButtonText}
                  color="#008ACE"
                  onPress={actionButtonHandler}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title={'Close'}
                  color="#DD6B55"
                  onPress={resetGlobalErrorModalState}
                />
              </View>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    maxWidth: 335,
    height: 40,
    borderRadius: 4,
    alignSelf: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
  },
});
