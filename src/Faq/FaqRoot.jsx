import React from 'react';

import FaqList from './FaqList';
import Search from '../Search';


const FaqRoot = ({
  params,
  location,
  children
}) => {
  return (
    <div>
      <Search />

      <FaqList params={params} location={location}>{children}</FaqList>
    </div>
  );
};

export default FaqRoot;
