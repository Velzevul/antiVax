import React from 'react';
import {Link} from 'react-router';

import styles from './Footer.css';
import layouts from '../../styles/layouts.css';


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
      ],
      contact = {
        name: 'Jennifer Potter',
        phone: '(204) 140-3849',
        email: 'jpotter@umanitoba.ca'
      };

const Footer = () => {
  return (
    <div className={styles.Bg}>
      <div className={`${layouts.wrap} ${styles.Wrap}`}>
        <div className={layouts.grid}>
          <div className={layouts.grid__item}>
            <div className={styles.Block}>
              <div className={layouts.block1}>
                <div className={styles.Block__title}>Contact</div>
              </div>

              <div className={layouts.block}>
                <div className={`${styles.Block__item} ${styles.Block__item_emph}`}>
                  {contact.name}
                </div>
              </div>

              <div className={layouts.block}>
                <div className={styles.Block__item}>
                  {contact.phone}
                </div>
              </div>

              <div className={styles.Block__item}>
                <a className={styles.Block__link} href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>
          </div>

          <div className={layouts.grid__item}>
            <div className={styles.Block}>
              <div className={layouts.block1}>
                <div className={styles.Block__title}>About us</div>
              </div>

              <div className={layouts.list}>
                { aboutNav.map( i =>
                  <div className={layouts.list__item} key={i.path}>
                    <div className={styles.Block__item}>
                      <Link className={styles.Block__link} to={i.path}>{i.label}</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={layouts.grid__item}>
            <div className={styles.Block}>
              <div className={layouts.block1}>
                <div className={styles.Block__title}>About us</div>
              </div>

              <div className={layouts.list}>
                { infoNav.map( i =>
                  <div className={layouts.list__item} key={i.path}>
                    <div className={styles.Block__item}>
                      <Link className={styles.Block__link} to={i.path}>{i.label}</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
