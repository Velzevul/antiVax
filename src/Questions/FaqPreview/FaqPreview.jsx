import React from 'react';
import {Link} from 'react-router';

import styles from './FaqPreview.css';


const FaqPreview = ({
  faq,
  query
}) => {
  return (
    <div className={styles.Wrap}>
      <Link className={styles.Link}
            to={{pathname: `/questions/${faq.id}`, query: {show: query.show}}}>{faq.title}</Link>
    </div>
  );
};

export default FaqPreview;
