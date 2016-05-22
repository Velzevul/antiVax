import fetch from 'isomorphic-fetch';

import adapter from '../adapter';
import {storeEntities} from '../App/appActions';

export const REQUEST_SECTION = 'REQUEST_SECTION';
export const RECEIVE_SECTION = 'RECEIVE_SECTION';


const requestSection = (
  section
) => {
  return {
    type: REQUEST_SECTION,
    section
  }
};

const receiveSection = (
  section,
  pages
) => {
  return {
    type: RECEIVE_SECTION,
    section,
    pages
  }
};

export const fetchSection = (
  section
) => {
  return dispatch => {
    dispatch( requestSection(section) );

    return fetch(adapter.sections(section))
      .then( response => response.json() )
      .then( data => {
        let pages = data.pages.slice(),
            entities = [];

        for (let page of pages) {
          if (page.items) {
            for (let item of page.items) {
              entities.push(item);
            }

            page.items = page.items.map(i => i.id);
          }

          entities.push(page);
        }

        pages = pages.map(p => p.id);

        dispatch(storeEntities(entities));
        dispatch(receiveSection(section, pages));
      } );
  }
};
