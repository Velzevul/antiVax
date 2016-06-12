import React from 'react';

import SearchBar from '../SearchBar';
import styles from './Search.css';
import layouts from '../../styles/layouts.css';
import states from '../../styles/states.css';
import typography from '../../styles/typography.css';


const Search = ({
  location
}) => {
  return (
    <div>
      <div className={layouts.block3}>
        <div className={states.aligned_mid}>
          <h1 className={typography.hPrimary}>What do you want to know about vaccines?</h1>
        </div>
      </div>

      <div className={`${layouts.wrap} ${styles.Wrap}`}>
        <SearchBar location={location} />
      </div>
    </div>
  );
};

export default Search;
