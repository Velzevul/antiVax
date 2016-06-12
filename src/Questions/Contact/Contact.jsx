import React from 'react';

import styles from './Contact.css';
import layouts from '../../styles/layouts.css';
import states from '../../styles/states.css';
import typography from '../../styles/typography.css';
import ui from '../../styles/ui.css';


const Contact = () => {
  return (
    <div>
      <div className={layouts.block3}>
        <div className={states.aligned_mid}>
          <h2 className={typography.hPrimary}>Cannot find the answer? Ask our specialist!</h2>
        </div>
      </div>

      <div className={layouts.block3}>
        <div className={`${layouts.wrap} ${styles.Wrap}`}>
          <div className={`${layouts.media} ${layouts.media_m}`}>
            <div className={layouts.media__figure3}>
              <img className={styles.Image} src="/images/jen.jpg" alt="Jennifer Potter"/>
            </div>

            <div className={layouts.media__body}>
              <div className={layouts.block1}>
                <h3 className={styles.Name}>Jennifer Potter</h3>
              </div>

              <div className={styles.Affiliation}>Family Physician<br/>Department of Family Medicine<br/>University of Manitoba</div>
            </div>
          </div>
        </div>
      </div>

      <div className={states.aligned_mid}>
        <button className={ui.button}>Send an email</button>
      </div>
    </div>
  )
};

export default Contact;
