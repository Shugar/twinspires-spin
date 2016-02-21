import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Spin.scss'
import Cookie from 'js-cookie'

@CSSModules(styles)
export class Spin extends React.Component {

  state = {
    loggedIn: this.props.loggedIn,
    today: this.props.today || '$10 FREE when you BET $10+',
    rotatePlease: this.props.spinRotate
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      rotatePlease: nextProps.spinRotate > this.props.spinRotate
    });

    console.log(this.state.rotatePlease)
  }

  render () {

    let spinOrWin = (
      <img styleName='spin' src={'http://shugar.github.io/twinspires-spin/spin.svg'} />
    );

    if (this.state.rotatePlease) {
      setTimeout( () => {
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
      }, 300)
    }

    return (
      <div>
        {spinOrWin}
      </div>
    )
  }

}


export default Spin
