import React from 'react'
import {connect} from 'react-redux'

import styles from './CurrentUser.css'
import {logOut} from '../../store/authActions'
import {Button} from '../UI'
import {ListInline, ListInlineItem} from '../Layouts'

const CurrentUser = ({
  user,
  logOut
}) => {
  return (
    <div className={styles.CurrentUser}>
      <ListInline>
        <ListInlineItem>
          <div className={styles.CurrentUser__name}>logged in as {user.name}</div>
        </ListInlineItem>

        <ListInlineItem>
          <Button onClick={logOut}>Log out</Button>
        </ListInlineItem>
      </ListInline>
    </div>
  )
}

export default connect(
  state => {
    return {
      user: state.auth.user
    }
  },
  dispatch => {
    return {
      logOut: () => {
        dispatch(logOut())
      }
    }
  }
)(CurrentUser)
