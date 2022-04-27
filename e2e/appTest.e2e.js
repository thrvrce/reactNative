describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should open MainScreen firstly', async () => {
    await expect(element(by.id('MainScreen'))).toBeVisible();
  });

  it('should show ProductDetails after tap on product item on MainScreen', async () => {
    await element(by.id('Product')).atIndex(0).tap();
    await expect(element(by.id('ProductDetails'))).toBeVisible();
  });
});
