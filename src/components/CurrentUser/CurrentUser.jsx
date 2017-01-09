import React from 'react'
import {connect} from 'react-redux'

import styles from './CurrentUser.css'
import {logOut} from '../../store/authActions'
import LinkButton from '../UI/LinkButton'
import {ListInline, ListInlineItem} from '../Layouts/ListInline'

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
          <LinkButton theme="accent2" onClick={logOut}>Log out</LinkButton>
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
