import fetch from 'isomorphic-fetch';

import storeNestedItems from '../App/AppActions';
import adapter from '../adapter';

export const REQUEST_FAQS = 'REQUEST_FAQS';
export const RECEIVE_FAQS = 'REQUEST_FAQS';


const requestFaqs = (
  category
)=> {
  return {
    type: REQUEST_FAQS,
    category
  };
};

const receiveFaqs = (
  category, 
  data
) => {
  return {
    type: RECEIVE_FAQS,
    category,
    ids: data.map( item => item.id )
  };
};

export const fetchFaqs = (
  category 
) => {
  return dispatch => {
    dispatch( requestFaqs(category) );

    return fetch(adapter.faqs(category))
      .then( response => JSON.parse(response.json) )
      .then( data => {
        dispatch(receiveFaqs(category, data.map(item => item.id)));
        dispatch(storeNestedItems(data));
      } );
  };
};
