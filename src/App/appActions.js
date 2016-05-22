export const STORE_ENTITIES = 'STORE_ENTITIES';

export const storeEntities = (
  entities
) => {
  return {
    type: STORE_ENTITIES,
    entities
  };
};
