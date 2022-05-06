import React, {FC, useState, useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {SearchBar} from '../../reusableComponents/SearchBar/SearchBar';
import {ProductListTypes} from '../Main/components/constants';
import {ProductsList} from '../Main/components/ProductsList';
import {getRequest, apiPath, productsResource} from '../../utils/http.service';
import {getProductsDataFromResponse} from '../../utils/productUtils';
import {IProduct} from '../../AppContext/AppContext';
import {AppContext} from '../../AppContext/AppContext';

const getFilteredProducts = async (
  nameFilterString = '',
  productsSetter: React.Dispatch<React.SetStateAction<IProduct[]>>,
  requestActivityStatusSetter: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  try {
    requestActivityStatusSetter(true);
    const nameFilters = '?filter[name]=' + nameFilterString;
    const response = await getRequest(apiPath + productsResource + nameFilters);
    const productsData = getProductsDataFromResponse(response.data);
    productsSetter(productsData);
  } catch (err) {
    console.log(err);
    productsSetter([]);
  } finally {
    requestActivityStatusSetter(false);
  }
};

export const ProductsSearch: FC = () => {
  const {setContextProducts} = useContext(AppContext);
  const [isRequestActive, setIsRequestActive] = useState(false);
  const [retrievedFilteredPRoducts, setRetrievedFilteredPRoducts] = useState<
    IProduct[]
  >([]);
  React.useEffect(() => {
    setContextProducts(existingProducts => {
      const productsToInsert = retrievedFilteredPRoducts.filter(product =>
        existingProducts.every(
          existingProduct => existingProduct.id !== product.id,
        ),
      );
      return productsToInsert.length
        ? [...existingProducts, ...productsToInsert]
        : [...existingProducts];
    });
  }, [retrievedFilteredPRoducts, setContextProducts]);

  return (
    <View>
      <SearchBar
        autoFocus={true}
        onSubmitEditing={(searchString: string) =>
          getFilteredProducts(
            searchString,
            setRetrievedFilteredPRoducts,
            setIsRequestActive,
          )
        }
      />
      {isRequestActive && <ActivityIndicator size="large" />}
      <ProductsList
        listType={ProductListTypes.OneColumn}
        products={retrievedFilteredPRoducts}
      />
    </View>
  );
};
