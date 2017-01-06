import React from 'react'
import {connect} from 'react-redux'

import {loginWithToken} from '../../store/authActions'
import {fetchArticles} from '../../store/articleActions'
import {fetchSections} from '../../store/sectionsActions'
import {setWindowWidth} from '../../store/uiActions'

import Loading from '../Loading'
import Login from '../Login'
import App from '../App'

class AppContainer extends React.Component {
  constructor (props) {
    super(props)

    this.handleResize = this.handleResize.bind(this)
  }

  handleResize () {
    const {setWindowWidth} = this.props

    setWindowWidth(window.outerWidth)
  }

  componentWillMount () {
    const token = localStorage.getItem('antiVax_auth_token')

    if (token) {
      this.props.attemptToken(token)
    }

    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  componentWillReceiveProps (newProps) {
    const {user, fetchSections, fetchArticles} = newProps

    if (user && !this.props.user) {
      fetchSections()
      fetchArticles()
    }
  }

  render () {
    const {isAuthorizing, isFetching, user, windowWidth, widthThreshold, children, location, params} = this.props

    if (isAuthorizing) {
      return <Loading />
    } else {
      if (user) {
        if (isFetching) {
          return <Loading />
        } else {
          return <App user={user}
            width={windowWidth}
            widthThreshold={widthThreshold}
            location={location}
            params={params}
            children={children} />
        }
      } else {
        return <Login />
      }
    }
  }
}

export default connect(
  state => {
    return {
      windowWidth: state.ui.windowWidth,
      widthThreshold: state.ui.widthThreshold,
      isFetching: state.articles.isFetching || state.sections.isFetching,
      isAuthorizing: state.auth.isFetching,
      user: state.auth.user
    }
  },
  dispatch => {
    return {
      setWindowWidth: (value) => {
        dispatch(setWindowWidth(value))
      },
      attemptToken: (token) => {
        dispatch(loginWithToken(token))
      },
      fetchArticles: () => {
        dispatch(fetchArticles())
      },
      fetchSections: () => {
        dispatch(fetchSections())
      }
    }
  }
)(AppContainer)
