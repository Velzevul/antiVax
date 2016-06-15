import React from 'react';

import styles from './Contact.css';
import layouts from '../styles/layouts.css';
import states from '../styles/states.css';
import typography from '../styles/typography.css';
import ui from '../styles/ui.css';


const Contact = () => {
  return (
    <aside className={styles.Contact}>
      <div className={layouts.block2}>
        <img className={styles.Contact__image} src="/images/jen.jpg" alt="Jennifer Potter"/>
      </div>

      <div className={layouts.block1}>
        <h1 className={styles.Contact__name}>Jennifer Potter</h1>
      </div>

      <div className={states.aligned_mid}>
        <div className={layouts.block2}>
          <div className={styles.Contact__affiliation}>Family Physician<br/>Department of Medicine<br/>University of Manitoba</div>
        </div>
      </div>

      <div className={states.aligned_mid}>
        <button className={ui.button}>Ask a question</button>
      </div>
    </aside>
  )
};

export default Contact;
