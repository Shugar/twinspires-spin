import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Spin.scss'
import Cookie from 'js-cookie'

@CSSModules(styles)
export class Spin extends React.Component {

  state = {
    loggedIn: this.props.loggedIn,
    today: this.props.today || '$10 FREE when you BET $10+'
  };

  render () {

    let spinOrWin = (
      <img styleName='spin' src={'http://shugar.github.io/twinspires-spin/spin.png'} />
    );

    if (this.props.loggedIn) {
      spinOrWin = (
        <div styleName='win'>
          <div styleName='title'>
            Congratulations!
            <br />
            You Won:
          </div>
          <div styleName='gift'>
            {this.state.today}
          </div>
          <div styleName='comeBack'>
            Come back tomorrow for a chance to win again!
          </div>
          <img styleName='logo' src={'http://shugar.github.io/twinspires-spin/logo.png'} />
        </div>
      );
    }

    return (
      <div>
        {spinOrWin}
      </div>
    )
  }
}


export default Spin
