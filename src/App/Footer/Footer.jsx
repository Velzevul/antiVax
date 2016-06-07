import React from 'react';
import {Link} from 'react-router';

import styles from './Footer.css';
import layouts from '../../layouts.css';


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
    <div className={styles.Footer}>
      <div className={layouts.wrapS}>
        <div className={`${layouts.grid} ${layouts.grid_center}`}>
          <div className={`${layouts.grid__item} ${layouts.grid__item}`}>
            <div className={styles.FooterBlock}>
              <div className={layouts.block}>
                <div className={styles.FooterBlock__title}>Contact</div>
              </div>

              <div className={layouts.blockS}>
                <div className={styles.FooterBlock__emph}>
                  {contact.name}
                </div>
              </div>

              <div className={layouts.blockS}>
                {contact.phone}
              </div>

              <a className={styles.FooterBlock__link} href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>

          <div className={`${layouts.grid__item} ${layouts.grid__item}`}>
            <div className={styles.FooterBlock}>
              <div className={layouts.block}>
                <div className={styles.FooterBlock__title}>About us</div>
              </div>

              { aboutNav.map( i =>
                <div className={layouts.blockS}>
                  <Link className={styles.FooterBlock__link} to={i.path}>{i.label}</Link>
                </div>
              )}
            </div>
          </div>

          <div className={`${layouts.grid__item} ${layouts.grid__item}`}>
            <div className={styles.FooterBlock}>
              <div className={layouts.block}>
                <div className={styles.FooterBlock__title}>About us</div>
              </div>

              { infoNav.map( i =>
                <div className={layouts.blockS}>
                  <Link className={styles.FooterBlock__link} to={i.path}>{i.label}</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
