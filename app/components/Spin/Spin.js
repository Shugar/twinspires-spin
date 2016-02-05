import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Spin.scss'
import Cookie from 'js-cookie'

@CSSModules(styles)
export class Spin extends React.Component {


  state = {
    camid: Cookie.get('CAMID') || ''
  };

  render () {
    return (
      <div>
        <img src={'http://shugar.github.io/twinspires-spin/spin.png'} />
      </div>
    )
  }
}


export default Spin
