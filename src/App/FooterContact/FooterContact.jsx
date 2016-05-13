import React from 'react';

import styles from './FooterContact.css';
import layouts from '../../layouts.css';

const contact = {
  name: 'Jennifer Potter',
  address: 'someaddress goes here',
  phone: 'phone',
  email: 'email'
};

const FooterContact = () => {
  return (
    <div className={styles.FooterContact}>
      <div className={layouts.block}>
        <div className={styles.FooterContact__title}>Contact us:</div>
      </div>

      <div className={styles.ContactBlock}>
        <div className={layouts.blockS}>
          <div className={styles.ContactBlock__name}>{contact.name}</div>
        </div>

        <div className={layouts.blockS}>
          <div className={styles.ContactBlock__address}>{contact.address}</div>
        </div>

        <div className={layouts.blockS}>
          <div className={styles.ContactBlock__phone}>{contact.phone}</div>
        </div>

        <div className={styles.ContactBlock__email}>{contact.email}</div>
      </div>
    </div>
  );
};

export default FooterContact;

