import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Header.scss'

@CSSModules(styles)
export default class Header extends Component {

  static PropTypes = {
    username: PropTypes.string
  }

  render () {

    return (
      <div styleName='header'>
        <div styleName='logo'>
          <a href={'http://www.twinspires.com/'}>
            <img styleName='image' src={'https://www.twinspires.com/sites/twinspires.com/files/twinspires_com_logo.png'} />
          </a>
        </div>
        <div styleName='text'>
          Spin and Win with TwinSpires
        </div>
      </div>
    )
  }
}
