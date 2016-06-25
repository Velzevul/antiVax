import React from 'react'
import {connect} from 'react-redux'

import {fetchSchedule} from '../../store/scheduleActions'

import {PageLink, Spinner} from '../../UI'
import {Heading1, Content} from '../../Typography'
import {Block, List, ListItem, Media, MediaFigure, MediaBody} from '../../Layouts'
import styles from './VaccinationSchedule.css'
import {prefix} from '../../config'

class VaccinationSchedule extends React.Component {
  componentWillMount () {
    const {dispatch} = this.props

    dispatch(fetchSchedule())
  }

  render () {
    const {items, isFetching} = this.props
    const text = `<p>The seasonal <a href='${prefix}/about-vaccines/vaccines/qiv-qlaiv'>Influenza</a> program may vary each year. <a href=''>Click here</a> for current information on the seasonal influenza vaccination.</p>`

    if (isFetching) {
      return (
        <div>
          <Block>
            <Heading1>Manitoba Health Vaccination Schedule</Heading1>
          </Block>

          <Spinner />
        </div>
      )
    } else {
      return (
        <div>
          <Block n={3}>
            <Heading1>Manitoba Health Vaccination Schedule</Heading1>
          </Block>

          <Block n={4}>
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

                {items.map(s =>
                  <ListItem key={s.id} n={0}>
                    <div className={styles.ScheduleItem}>
                      <Media>
                        <MediaFigure span={1} outOf={5}>
                          <div className={styles.ScheduleItem__age}>
                            {s.age}
                          </div>
                        </MediaFigure>

                        <MediaBody>
                          <div className={styles.ScheduleItem__vaccines}>
                            <List n={0.5}>
                              {s.vaccines.map(v =>
                                <ListItem key={v.url} n={0.5}>
                                  <PageLink to={v.url}>{v.title}</PageLink>
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
          </Block>

          <Content text={text} />
        </div>
      )
    }
  }
}

export default connect(
  state => {
    const {items, isFetching} = state.schedule

    return {
      items,
      isFetching
    }
  }
)(VaccinationSchedule)
