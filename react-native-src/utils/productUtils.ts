import {IProduct} from '../AppContext/AppContext';

export const getProductsDataFromResponse = (responseData: any): IProduct[] =>
  responseData.map((productDataFromResponse: any) => {
    const {id, attributes} = productDataFromResponse;
    const {name, description, price, compare_at_price} = attributes;

    return {
      id,
      name,
      description,
      imgSrc: 'https://picsum.photos',
      price: Number(price),
      // price: Math.round(Number(price) * Math.random()), // uncomment for refresh testing
      compareAtPrice: Number(compare_at_price ?? price),
    };
  });

export const fillOPtionsDataColor = (
  optionValues: any[],
): {
  name: string;
  presentation: string;
}[] =>
  optionValues
    ? optionValues
        .find((optionType: {name: string}) => optionType.name === 'color')
        .option_values.map(
          ({name, presentation}: {name: string; presentation: string}) => ({
            name,
            presentation,
          }),
        )
    : [];
