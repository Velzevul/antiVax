import {STORE_ENTITIES} from './appActions';


const entities = (
  state = {},
  action
) => {
  switch(action.type) {
    case STORE_ENTITIES:
      return action.entities.reduce( (accum, entity) => {
        return Object.assign({}, accum, {[entity.id]: entity})
      }, state);
    default:
      return state;
  }
};

export default entities;
