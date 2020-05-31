import React, {Component} from 'react'
import './index.scss'
import { Button, Toast } from 'antd-mobile'
import http from '../../http'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CommonAction from '../../redux/actions/common';
class Login extends Component{
  async submitLogin () {
    const name = this.refs.name.value
    const password = this.refs.password.value
    const {errCode, errMessage} = await http.postLogin({name, password});
    if(errCode === 0){
      Toast.success('登录成功', .5);
      this.props.actions.loginSuccess();
    } else {
      Toast.fail(errMessage, .5)
    }
  }
  render () {
    return (
      <div className="loginBox">
        <div className="switchBtn">
          <Button type="ghost" icon="right" inline size="small" onClick={this.props.actions.gotoRegister}>注册</Button>
        </div>
        <div className="logo">
          <img src="/img/logo.png" alt=""/>
        </div>
        <div className="loginMain">
          <div className="inputWrap onePx_bottom">
            <input type="text" ref="name" placeholder="请输入用户名" />
          </div>
          <div className="inputWrap onePx_bottom">
            <input type="password" ref="password" placeholder="请输入登录密码" />
          </div>
          <div className="loginBtn">
            <Button type="primary" onClick={this.submitLogin.bind(this)}>登录</Button>
          </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(CommonAction, dispatch)})
export default (connect(null, mapDispatchToProps)(Login))
