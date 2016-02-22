import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Login.scss'

@CSSModules(styles)
export class Login extends React.Component {

  state = {
    login: this.props.login,
    password: this.props.password,
    onLoginClick: this.props.onLoginClick,
    removeForm: false
  };

  render () {

    let loginForm;
    let redeem;

    if (this.props.today.key === "1" || this.props.today.key === "2") {
      redeem = (
        <div styleName='list'>
          <div styleName='subtitle'>{this.props.today.redeem}</div>
        </div>
      );
    } else if (!!this.props.today.maximum === true) {
      redeem = (
        <div styleName='list'>
          <div styleName='subtitle'>1) {this.props.today.redeem[0]}</div>
          <div styleName='subtitle'>2) {this.props.today.redeem[1]}</div>
          <div styleName='maximum'>{this.props.today.maximum}</div>
        </div>
      );
    } else {
      redeem = (
        <div styleName='list'>
          <div styleName='subtitle'>1) {this.props.today.redeem[0]}</div>
          <div styleName='subtitle'>2) {this.props.today.redeem[1]}</div>
        </div>
      );
    }

    let logged = (
      <div styleName='loggedIn'>
        <div styleName='title'>How to redeem your prize</div>
        {redeem}
        <div styleName='button'>
          Redeem Prize Now!
        </div>
      </div>
    );

    if (this.props.loggedIn) {
      loginForm = (
        <form method="post" action="https://www.twinspires.com/php/login.php">
          <div styleName='title'>How to Play</div>
          <div>
            <div styleName='formTitle'>Spin the Wheel to discover your Prize!</div>
            <div styleName='iconButton'>
              <img src={'http://shugar.github.io/twinspires-spin/gift.png'} />
            </div>
            <div styleName='button' onClick={this._onSpinClick}>
              SPIN NOW
            </div>
          </div>
        </form>
      );
    } else {
      loginForm = (
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

            <input onChange={this._onChangeLogin}
                   styleName='input'
                   type='text'
                   ref='username'
                   name='acct'
                   maxLength='100'
                   placeholder='Username' />

            <input onChange={this._onChangePassword}
                   styleName='input'
                   name='pin'
                   ref='password'
                   maxLength='16'
                   type='password'
                   placeholder='Password' />

            <div onClick={this.props.onLoginClick} styleName='login'>Login</div>
            <a styleName='link' target="_blank" href='https://www.twinspires.com/account/password/request'>Forgot username/password?</a>
          </div>

          <div>
            <div styleName='formTitle'>2) Spin the Wheel to discover your Prize!</div>
            <div styleName='iconButton'>
              <img src={'http://shugar.github.io/twinspires-spin/gift.png'} />
            </div>
            <div styleName='button' onClick={this._focusInputLoginIn}>
              SPIN NOW
            </div>
          </div>
        </form>
      );
    }

    if (this.state.removeForm) {
      loginForm = logged;
    }

    return (
      <div styleName='login-container'>
        {loginForm}
      </div>
    )
  }

  _focusInputLoginIn = () => {
    if (!this.props.loggedIn) {
      if (this.refs.username.value === '') {
        this.refs.username.focus();
      } else if (this.refs.password.value === '') {
        this.refs.password.focus();
      } else {
        this.props.onLoginClick();
      }
    }
  }

  _onSpinClick = () => {
    setTimeout(() => {
      this.setState({
        removeForm: !this.state.removeForm
      });
    }, 3000);
    this.props.onSpinClick();
  }

  _onChangeLogin = (event) => {
    var loginValue = event.target.value
    this.setState({login: loginValue})
  }

  _onChangePassword = (event) => {
    var passwordValue = event.target.value
    this.setState({password: passwordValue})
  }

}

export default Login
