import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Menu.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Menu extends Component {
  render () {
    return (
      <div styleName='menu'>
        <div styleName='item wager'><a href={'/wager?referrer=raf_email'}>wager now</a></div>
        <div styleName='item video'><a href={'/ts-video?referrer=raf_email'}>live video</a></div>
        <div styleName='item handicapping'><a href={'/handicapping?referrer=raf_email'}>handicapping</a></div>
        <div styleName='item news'><a href={'/blog?referrer=raf_email'}>news</a></div>
        <div styleName='item rewards'><a href={'/tsc-rewards?referrer=raf_email'}>rewards</a></div>
        <div styleName='item promotions'><a href={'/promotions?referrer=raf_email'}>contests & promotions</a></div>
        <div styleName='item support'><a href={'/support?referrer=raf_email'}>support</a></div>
      </div>
    )
  }
}
