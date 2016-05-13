export const STORE_NESTED_ITEMS = 'STORE_NESTED_ITEMS';

export const storeNestedItems = (
  data
) => {
  return {
    type: STORE_NESTED_ITEMS,
    items: data
  };
};
