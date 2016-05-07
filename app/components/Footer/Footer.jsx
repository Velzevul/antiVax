import React from 'react';

import styles from './Footer.css';
import layouts from '../../styles/layouts.css';

import FooterNav from '../FooterNav';
import FooterContact from '../FooterContact';

const aboutNav = [
        {
          label: "Moderator's biography",
          path: '/moderator'
        },
        {
          label: "History of the project",
          path: '/history'
        },
        {
          label: "Project funding",
          path: '/funding'
        }
      ],
      infoNav  = [
        {
          label: "Terms of use",
          path: '/terms'
        },
        {
          label: "Financing sources",
          path: '/financing'
        },
        {
          label: "Privacy regulations",
          path: '/privacy'
        }
      ];

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={layouts.wrapS}>
        <div className={`${layouts.grid} ${layouts.grid_center}`}>
          <div className={`${layouts.grid__item} ${layouts.grid__item_1_3}`}>
            <FooterContact />
          </div>

          <div className={`${layouts.grid__item} ${layouts.grid__item_1_3}`}>
            <FooterNav items={aboutNav} title="About Us" />
          </div>

          <div className={`${layouts.grid__item} ${layouts.grid__item_1_3}`}>
            <FooterNav items={infoNav} title="Additional Information" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
