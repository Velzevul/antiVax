import React from 'react'
import {connect} from 'react-redux'

import {updateUser} from '../../store/usersActions'
import Block from '../Layouts/Block'
import Wrap from '../Layouts/Wrap'
import TextInput from '../UI/TextInput'
import Button from '../UI/Button'
import Heading1 from '../Typography/Heading1'
import Body from '../Body'

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

    updatePassword(currentUser.id, this.state.data, 'Your password has been successfully updated')
  }

  render () {
    const {isUpdating} = this.props.user

    return (
      <Wrap maxWidth="30rem">
        <Body>
          <Block n={3}>
            <Heading1>Change password</Heading1>
          </Block>

          <Block>
            <TextInput label="New password:"
              value={this.state.data.password}
              error={this.state.errors.password}
              disabled={isUpdating}
              changeCallback={(v) => this.change('password', v)} />
          </Block>

          <Button
            onClick={this.submit}
            disabled={isUpdating}>Update password</Button>
        </Body>
      </Wrap>
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
    return {
      updatePassword: (id, payload) => {
        dispatch(updateUser(id, payload))
      }
    }
  }
)(ChangePassword)
