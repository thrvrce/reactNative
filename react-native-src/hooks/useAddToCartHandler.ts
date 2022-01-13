import {useContext, useCallback} from 'react';
import {AppContext} from '../Context/AppContext';

export function useAddToCartHandler<
  TNavigation extends {navigate: (path: string) => void},
>(navigation: TNavigation, selectedColor: string, productId = '') {
  const {userLogged, changeCart} = useContext(AppContext);

  const memoisedAddToCartHandler = useCallback(() => {
    if (userLogged) {
      navigation.navigate('WarningModal');
    } else if (!selectedColor) {
      // on design mockup, if product color was not specified, should redirect to error modal
      navigation.navigate('ErrorModal');
    } else {
      changeCart(prevCartState => [
        ...prevCartState,
        {
          productId,
          productOptions: {color: selectedColor},
        },
      ]);
      navigation.navigate('SuccessModal');
    }
  }, [userLogged, selectedColor, navigation, productId, changeCart]);

  return memoisedAddToCartHandler;
}
