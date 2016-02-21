import React from 'react'
import Cookie from 'js-cookie'
import Header from '../../components/Header/Header'
import Comments from '../../components/Comments/Comments'
import Spin from '../../components/Spin/Spin'
import Login from '../../components/Login/Login'
import CSSModules from 'react-css-modules'
import '../../styles/core.scss'

import styles from './App.scss';

var Cdi = Cdi || {};
Cdi.AppConfig = Cdi.AppConfig || {};
Cdi.AppConfig.WS = {
    CDI_BRIDGE: '',
    CDI_BRIDGE_PROXY: '',
    CDI_CLIENT_IP: '192.168.1.100',
    CDI_JSON_TYPE: 'json',
    PASSWORD: 'Oon2kee6thoh',
    USERNAME: 'cdi_marketing',
    CDI_SAID: '2800',
    PUBLIC_API_KEY: 'e97c4199ad4a4155aced22a3c0c369a6',
    TOTE_CONFIG_URL: 'https://www.twinspires.com/php/fw/php_BRIS_BatchAPI/2.3/Tote/Config'
};
Cdi.Service = Cdi.Service || {};
Cdi.Service.ADW_ACCOUNT_BALANCE = "ADW_ACCOUNT_BALANCE"
Cdi.AppConfig.PATH = {};


@CSSModules(styles)
export default class App extends React.Component {

  state = {
    // loggedIn: !!(Cookie.get("ACCT")),
    loggedIn: false,
    username: Cookie.get('NAME') || '',
    spinRotate: false
  }

  render() {
    return (
      <div styleName='container'>
        <Header />
        <div styleName='main'>
          <div styleName='spin'>
            <Spin spinRotate={this.state.spinRotate} loggedIn={this.state.loggedIn} />
          </div>
          <div styleName='login'>
            <Login ourFunction={this._ourFunction} onSpinClick={this._spinRotate} loggedIn={this.state.loggedIn} />
          </div>
        </div>
        <Comments loggedIn={this.state.loggedIn} />
      </div>
    );
  }

  _ourFunction = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  }

  _spinRotate = () => {
    this.setState({
      spinRotate: !this.state.spinRotate
    });
  }
}
