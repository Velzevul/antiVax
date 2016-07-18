import React from 'react'
import {connect} from 'react-redux'

import {PageLink} from '../UI'
import {List, ListItem, Media, MediaFigure, MediaBody} from '../Layouts'
import styles from './VaccinationSchedule.css'

const VaccinationSchedule = ({
  items,
  vaccineArticle
}) => {
  return (
    <div className={styles.Schedule}>
      <List n={0}>
        <ListItem n={0}>
          <div className={`${styles.ScheduleItem} ${styles.ScheduleItem_header}`}>
            <Media>
              <MediaFigure span={1} outOf={5}>
                <div className={styles.ScheduleItem__age}>
                  Child's age
                </div>
              </MediaFigure>

              <MediaBody>
                <div className={styles.ScheduleItem__vaccines}>
                  Suggested vaccination(s)
                </div>
              </MediaBody>
            </Media>
          </div>
        </ListItem>

        {items.map((i, k) =>
          <ListItem key={k} n={0}>
            <div className={styles.ScheduleItem}>
              <Media>
                <MediaFigure span={1} outOf={5}>
                  <div className={styles.ScheduleItem__age}>
                    {i.age}
                  </div>
                </MediaFigure>

                <MediaBody>
                  <div className={styles.ScheduleItem__vaccines}>
                    <List n={0.5}>
                      {i.vaccines.map((v, j) =>
                        <ListItem key={j} n={0.5}>
                          <PageLink to={`${PUBLIC_PATH}/${vaccineArticle.type.id}/${vaccineArticle.url}/${v.url}`}>{v.title}</PageLink>
                        </ListItem>
                      )}
                    </List>
                  </div>
                </MediaBody>
              </Media>
            </div>
          </ListItem>
        )}
      </List>
    </div>
  )
}

export default connect(
  state => {
    return {
      items: state.schedule.items,
      vaccineArticle: state.articles.items.filter(i => i.isPublished && i.attachment === 'vaccines')[0]
    }
  }
)(VaccinationSchedule)
