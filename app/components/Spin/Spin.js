import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Spin.scss'
import Cookie from 'js-cookie'

import transitions from './Transition.scss'

@CSSModules(styles, {allowMultiple: true})
export class Spin extends React.Component {

  state = {
    today: this.props.today,
    getGift: this.props.spinRotate,
    transitionSpin: false
  }

  componentWillMount = () => {
    this.setState({
      getGift: false
    });
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.loggedIn === true) {
      this.setState({
        transitionSpin: !this.state.transitionSpin
      });
      setTimeout(() => {
        this.setState({
          getGift: nextProps.spinRotate
        });
        localStorage.setItem('lastSpin',  this.state.today.key);
      }, 3000);
    }
  }

  render () {

    let spinOrWin;

    if (this.state.transitionSpin) {
      spinOrWin = (
        <img styleName='spin withTransition' src={'http://shugar.github.io/twinspires-spin/spin.svg'} />
      );
    } else {
      spinOrWin = (
        <img styleName='spin' src={'https://www.twinspires.com/sites/twinspires.com/files/spin.png'} />
      );
    }

    let youWon = 'You won:';
    if (this.props.today.key === '2') {
      youWon = '';
    }

    if (this.state.getGift || localStorage.getItem('lastSpin') === this.state.today.key) {
      spinOrWin = (
        <div styleName='win'>
          <div styleName='title'>
            Congratulations!
            <br />
            {youWon}
          </div>
          <div styleName='gift'>
            {this.props.today.gift}
          </div>
          <div styleName='comeBack'>
            {this.props.today.message}
          </div>
          <img styleName='logo' src={'https://www.twinspires.com/sites/twinspires.com/files/logo.png'} />
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
