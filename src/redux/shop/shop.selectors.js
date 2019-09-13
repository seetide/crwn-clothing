import { createSelector } from 'reselect';

const selectShop = state => state.shop;

// all collections as object
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// all collections as array after keys and map
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

// single collection identified by the url param
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );
