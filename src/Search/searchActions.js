import fetch from 'isomorphic-fetch';

import adapter from '../adapter';
import {storeEntities} from '../App/appActions';


export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

const requestSearch = (query) => {
  return {
    type: REQUEST_SEARCH,
    query
  }
};

const receiveSearch = (items) => {
  return {
    type: RECEIVE_SEARCH,
    items
  }
};

export const fetchSearch = (query) => {
  return (dispatch) => {
    dispatch( requestSearch(query) );

    return fetch(adapter.search(query))
      .then( response => response.json() )
      .then( data => {
        dispatch(storeEntities(data.items));
        dispatch(receiveSearch(data.items.map(i => i.id)));
      })

  }
};
