import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Login.scss'

@CSSModules(styles)
export class Login extends React.Component {

  state = {
    login: this.props.login,
    password: this.props.password,
    ourFunction: this.props.ourFunction
  };

  render () {

    let loginForm = (
      <form method="post" action="https://www.twinspires.com/php/login.php">
        <div styleName='title'>How to Play</div>
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
          <div onClick={this.props.ourFunction} styleName='login'>Login</div>
          <a styleName='link' target="_blank" href='https://www.twinspires.com/account/password/request'>Forgot username/password?</a>
        </div>

        <div>
          <div styleName='formTitle'>2) Spin the Wheel to discover your Prize!</div>
          <div styleName='iconButton'>
            <img src={'http://shugar.github.io/twinspires-spin/gift.png'} />
          </div>
          <div styleName='button' onClick={this.props.onSpinClick}>
            SPIN NOW
          </div>
        </div>
      </form>
    );

    let logged = (
      <div styleName='loggedIn'>
        <div styleName='title'>How to redeem your prize</div>
        <div styleName='list'>
          <div styleName='subtitle'>1) Place $10+ in bets on your favorite race</div>
          <div styleName='subtitle'>2) You will get $10 FREE in your account within 24 hours</div>
        </div>
        <div styleName='button'>
          Redeem Prize Now!
        </div>
      </div>
    );


    return (
      <div styleName='login-container'>
        { this.props.loggedIn ? logged : loginForm }
      </div>
    )
  }

  _onChangeLogin = (event) => {
    var loginValue = event.target.value
    this.setState({login: loginValue})
  };

  _onChangePassword = (event) => {
    var passwordValue = event.target.value
    this.setState({password: passwordValue})
  };

}

export default Login
