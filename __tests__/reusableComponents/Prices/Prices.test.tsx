import React from 'react';
import {render} from '@testing-library/react-native';
import {Prices} from '../../../react-native-src/reusableComponents/Prices/Prices';

describe('Prices  component', () => {
  test('should render correct current price text', () => {
    const mockPrice = 12;
    const mockCompareAtPrice = 34;
    const {queryByTestId} = render(
      <Prices price={mockPrice} compareAtPrice={mockCompareAtPrice} />,
    );

    expect(queryByTestId('currentPriceText')?.props.children).toBe(
      `$${mockPrice}`,
    );
  });

  test('source price should be equal to compareAtPrice if price and compareAtPrice are different', () => {
    const mockPrice = 12;
    const mockCompareAtPrice = 34;
    const {queryByTestId} = render(
      <Prices price={mockPrice} compareAtPrice={mockCompareAtPrice} />,
    );

    expect(queryByTestId('sourcePriceText')?.props.children).toBe(
      ` $${mockCompareAtPrice}`,
    );
  });

  test('source price should be equal to empty string if price and compareAtPrice are different', () => {
    const mockPrice = 12;
    const mockCompareAtPrice = mockPrice;
    const {queryByTestId} = render(
      <Prices price={mockPrice} compareAtPrice={mockCompareAtPrice} />,
    );

    expect(queryByTestId('sourcePriceText')?.props.children).toBe('');
  });

  test('should render correct price difference text if compareAtPrice is bigger than price', () => {
    const mockPrice = 10;
    const mockCompareAtPrice = 16;
    const {queryByTestId} = render(
      <Prices price={mockPrice} compareAtPrice={mockCompareAtPrice} />,
    );

    expect(queryByTestId('priceDiffPercentsText')?.props.children).toBe(
      ' 60% Off',
    );
  });

  test('should render correct price difference text if compareAtPrice is lower than price', () => {
    const mockPrice = 10;
    const mockCompareAtPrice = 4;
    const {queryByTestId} = render(
      <Prices price={mockPrice} compareAtPrice={mockCompareAtPrice} />,
    );

    expect(queryByTestId('priceDiffPercentsText')?.props.children).toBe('');
  });

  test('should render correct price difference text if compareAtPrice and  price are equal', () => {
    const mockPrice = 10;
    const mockCompareAtPrice = 4;
    const {queryByTestId} = render(
      <Prices price={mockPrice} compareAtPrice={mockCompareAtPrice} />,
    );

    expect(queryByTestId('priceDiffPercentsText')?.props.children).toBe('');
  });
});
