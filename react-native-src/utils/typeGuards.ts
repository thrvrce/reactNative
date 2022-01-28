export const isError = (err: any): err is Error => {
  if (err instanceof Error) {
    return true;
  }
  return false;
};
