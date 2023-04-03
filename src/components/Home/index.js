import {Component} from 'react'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLogin: true}

  onClickButton = () => {
    this.setState(PrevState => ({isLogin: !PrevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    const buttonText = isLogin ? Login : Logout
    const messageTextContent = isLogin ? 'Please Login' : 'Welcome User'

    return (
      <div className="container">
        <div className="card-container">
          <Message messageText={messageTextContent} />
          <button type="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
