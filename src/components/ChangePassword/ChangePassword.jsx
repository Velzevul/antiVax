import React from 'react'
import {connect} from 'react-redux'

import {updateUser} from '../../store/usersActions'
import Block from '../Layouts/Block'
import Wrapper from '../Layouts/Wrapper'
import Box from '../Layouts/Box'
import TextInput from '../UI/TextInput'
import Button from '../UI/Button'
import Heading2 from '../Typography/Heading2'

class ChangePassword extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      errors: {},
      data: {
        password: ''
      }
    }

    this.chnage = this.change.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentWillReceiveProps (newProps) {
    const {errors, isUpdating} = newProps.user

    if (!isUpdating) {
      if (Object.keys(errors).length === 0 && errors.constructor === Object) {
        this.setState({
          data: {
            password: ''
          }
        })
      } else {
        this.setState({errors})
      }
    }
  }

  change (prop, value) {
    const newData = Object.assign({}, this.state.data, {
      [prop]: value
    })

    const newErrors = Object.assign({}, this.state.errors, {
      [prop]: null
    })

    this.setState({
      data: newData,
      errors: newErrors
    })
  }

  submit () {
    const {updatePassword, currentUser} = this.props

    updatePassword(currentUser.id, this.state.data)
  }

  render () {
    const {isUpdating} = this.props.user

    return (
      <Wrapper maxWidth="25">
        <Box n={8}>
          <Block>
            <Heading2>Change password</Heading2>
          </Block>

          <form>
            <Block>
              <TextInput label="New password:"
                value={this.state.data.password}
                error={this.state.errors.password}
                disabled={isUpdating}
                type="password"
                changeCallback={(v) => this.change('password', v)} />
            </Block>

            <Button
              onClick={this.submit}
              disabled={isUpdating}>Update password</Button>
          </form>
        </Box>
      </Wrapper>
    )
  }
}

export default connect(
  state => {
    return {
      currentUser: state.auth.user,
      user: state.user
    }
  },
  dispatch => {
    const backlink = '/'

    return {
      updatePassword: (id, payload) => {
        dispatch(updateUser(id, payload, backlink))
      }
    }
  }
)(ChangePassword)
