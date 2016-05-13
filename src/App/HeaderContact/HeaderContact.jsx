import React from 'react';

import styles from './HeaderContact.css';
import layouts from '../../layouts.css';

const contact = {
  name: 'Jennifer Potter',
  affiliation: 'Affiliation goes here'
};

const HeaderContact = () => {
  return (
    <div className={styles.HeaderContact}>
      <div className={styles.ContactBox}>
        <div className={layouts.blockS}>
          <div className={styles.ContactBox__name}>{contact.name}</div>
        </div>

        <div className={layouts.blockS}>
          <div className={styles.ContactBox__affiliation}>{contact.affiliation}</div>
        </div>

        <div className={styles.ContactBox__link}>see bio</div>
      </div>
    </div>
  );
};

export default HeaderContact;

