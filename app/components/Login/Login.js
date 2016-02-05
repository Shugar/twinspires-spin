import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Login.scss'

@CSSModules(styles)
export class Login extends React.Component {

  state = {
    login: this.props.login,
    password: this.props.password
  };

  render () {
    return (
      <div styleName='login-container'>
        <div styleName='title'>How to Play</div>
        <form method="post" action="https://www.twinspires.com/php/login.php">
          <div>
            <div styleName='formTitle'>1) Log in to your account</div>
            <input type="hidden" name="destination" value=""/>
            <input type="hidden" value="user_login" name="form_id"/>
            <input type="hidden" value="2800" name="affid"/>
            <input type="hidden" value="0" name="blocklogin"/>
            <input type="hidden" value="1" name="wager"/>
            <input type="hidden" value="75c1c409d022d057054b07e99e0a5690" name="tmsid"/>
            <input id="header_edit-redirect" type="hidden" value="https://www.twinspires.com/raf-email-test" name="redirect"/>

            <input onChange={this._onChangeLogin} styleName='input' type='text' name='acct' maxLength='100' placeholder='Username' />
            <input onChange={this._onChangePassword} styleName='input' name='pin' maxLength='16' type='password' placeholder='Password' />
            <button type='submit' onClick={this._onSubmitClick} styleName='login'>
              Login
            </button>
            <a styleName='link' target="_blank" href='https://www.twinspires.com/account/password/request'>Forgot username/password?</a>
          </div>

          <div>
            <div styleName='formTitle'>2) Spin the Wheel to discover your Prize!</div>
            <div styleName='iconButton'>
              <img src={'http://shugar.github.io/twinspires-spin/gift.png'} />
            </div>
            <button type='submit' onClick={this._onSubmitClick} styleName='button'>
              SPIN NOW
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
