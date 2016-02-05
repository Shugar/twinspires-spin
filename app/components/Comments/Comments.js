import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Comments.scss'

@CSSModules(styles)
export class Comments extends Component {

  static PropTypes = {
    loggedIn: PropTypes.bool
  }

  defaultProps = {
    loggedIn: false
  }

  render () {

    let secondComment;
    if (this.props.loggedIn) {
      secondComment = (
        <div styleName='commentTwo'>
          <div styleName='image'>
            <img src={'http://shugar.github.io/twinspires-spin/money.png'} />
          </div>
          <div styleName='textBlock'>
            <div styleName='title'>
              Want more chances to win?
            </div>
            <div styleName='text'>
              For every $20 you deposit, you get a new spin.
            </div>
          </div>
          <div styleName='button'>Deposit and Play Again</div>
        </div>
      );
    }

    return (
      <div styleName='comments'>
        <div styleName='commentOne'>
          <div styleName='image'>
            <img src={'http://shugar.github.io/twinspires-spin/calendar.png'} />
          </div>
          <div styleName='textBlock'>
            <div styleName='text'>
              You can spin the wheel ONCE per day. Come back daily for a chance at new prizes!
            </div>
          </div>
        </div>
        {secondComment}
      </div>
    )
  }
}

export default Comments
