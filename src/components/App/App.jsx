import React from 'react'
import {connect} from 'react-redux'

import Login from '../Login'
import Header from '../Header'
import Footer from '../Footer'
import FlashMessage from '../FlashMessage'
import Loading from '../Loading'
import {Page, PageContent} from '../Layouts'
import {loginWithToken} from '../../store/authActions'
import {fetchArticles} from '../../store/articleActions'
import {fetchSchedule} from '../../store/scheduleActions'

class App extends React.Component {
  componentWillMount () {
    this.props.fetchArticles()
    this.props.fetchSchedule()
    const token = localStorage.getItem('antiVax_auth_token')

    if (token) {
      this.props.attemptToken(token)
    }
  }

  render () {
    const {
      user,
      attemptingLogin,
      isFetchingArticles,
      isFetchingSchedule,
      children,
      location
    } = this.props

    if (attemptingLogin || isFetchingArticles || isFetchingSchedule) {
      return (
        <Loading />
      )
    } else {
      if (user) {
        return (
          <Page>
            <Header location={location} />

            <PageContent>
              {children}
            </PageContent>

            <Footer />

            <FlashMessage />
          </Page>
        )
      } else {
        return (
          <Page>
            <PageContent>
              <Login />
            </PageContent>

            <FlashMessage />
          </Page>
        )
      }
    }
  }
}

export default connect(
  state => {
    return {
      isFetchingSchedule: state.schedule.isFetching,
      isFetchingArticles: state.articles.isFetching,
      attemptingLogin: state.auth.isFetching,
      user: state.auth.user
    }
  },
  dispatch => {
    return {
      attemptToken: (token) => {
        dispatch(loginWithToken(token))
      },
      fetchArticles: () => {
        dispatch(fetchArticles())
      },
      fetchSchedule: () => {
        dispatch(fetchSchedule())
      }
    }
  }
)(App)
