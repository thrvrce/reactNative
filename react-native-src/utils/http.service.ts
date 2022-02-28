export const apiPath = 'https://rn-mentoring.herokuapp.com/api/v2/storefront';
export const productsResource = '/products';

export const getRequest = async (queryString: string) => {
  const rawResponse = await fetch(queryString);

  if (rawResponse.status >= 400) {
    throw new Error(
      `Error while fetching products!\n Status code ${rawResponse.status}`,
    );
  }

  const response = await rawResponse.json();

  return response;
};
