import React from 'react'
import CSSModules from 'react-css-modules'
import Spin from '../../components/Spin/Spin'
import Login from '../../components/Login/Login'
import styles from './Main.scss'
import Cookie from 'js-cookie'

@CSSModules(styles)
export class Main extends React.Component {

  render () {
    return (
      <div>
      	<div styleName='spin'>
	      	<Spin />
	      </div>
	      <div styleName='login'>
	        <Login />
       	</div>
      </div>
    )
  }
}


export default Main
