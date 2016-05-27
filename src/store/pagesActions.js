import {firebaseDb} from './firebaseRef';


export const REQUEST_PAGE = 'REQUEST_PAGE';
export const RECEIVE_PAGE = 'RECEIVE_PAGE';

const requestPage = (
  pageId
) => {
  return {
    type: REQUEST_PAGE,
    pageId
  }
};

const receivePage = (
  pageId,
  page
) => {
  return {
    type: RECEIVE_PAGE,
    pageId,
    page
  }
};

export const fetchPage = (
  pageId
) => {
  return dispatch => {
    dispatch( requestPage(pageId) );

    firebaseDb.ref(`pages/${pageId}`)
      .on('value', snapshot => {
        dispatch(receivePage(pageId, snapshot.val()));
      });
  }
};
