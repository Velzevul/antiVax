import React from 'react';

import FaqList from '../FaqList';
import Contact from '../../Contact';
import styles from './QuestionsPage.css';
import layouts from '../../styles/layouts.css';
import typography from '../../styles/typography.css';
import states from '../../styles/states.css';


const QuestionsPage = ({
  children,
  params
}) => {
  return (
    <div className={`${layouts.wrap} ${styles.QuestionsPage}`}>
      <div className={layouts.grid}>
        <div className={`${layouts.grid__item} ${layouts._2_10}`}>
          <div className={styles.QuestionsPage__sidebar}>
            <div className={layouts.block2}>
              <div className={states.aligned_mid}>
                <h3 className={typography.hSecondary}>Our Specialist</h3>
              </div>
            </div>

            <Contact />
          </div>
        </div>

        <div className={layouts.grid__item}>
          <div className={styles.QuestionsPage__body}>
            <div className={layouts.block2}>
              <h1 className={typography.hPrimary}>Frequent Questions</h1>
            </div>

            <FaqList params={params}>
              {children}
            </FaqList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
