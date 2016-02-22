import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Spin.scss'
import Cookie from 'js-cookie'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactCSSTransitionReplace from 'react-css-transition-replace'

import transitions from './Transition.scss'

@CSSModules(styles, {allowMultiple: true})
export class Spin extends React.Component {

  state = {
    today: this.props.today || '$10 FREE when you BET $10+',
    rotatePlease: this.props.spinRotate,
    transitionSpin: false
  }

  componentWillMount = () => {
    this.setState({
      rotatePlease: false
    });
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      transitionSpin: !this.state.transitionSpin
    });

    setTimeout(() => {
      this.setState({
        rotatePlease: nextProps.spinRotate
      });
    }, 3000);
  }

  render () {

    let spinOrWin;

    if (this.state.transitionSpin) {
      spinOrWin = (
        <img styleName='spin withTransition' src={'http://shugar.github.io/twinspires-spin/spin.svg'} />
      );
    } else {
      spinOrWin = (
        <img styleName='spin' src={'http://shugar.github.io/twinspires-spin/spin.svg'} />
      );
    }

    if (this.state.rotatePlease) {
      spinOrWin = (
        <div styleName='win'>
          <div styleName='title'>
            Congratulations!
            <br />
            You Won:
          </div>
          <div styleName='gift'>
            {this.props.today.gift}
          </div>
          <div styleName='comeBack'>
            {this.props.today.message}
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
