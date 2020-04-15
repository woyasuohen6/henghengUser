import React, {Component} from 'react'
import './index.scss'
import { Button, Toast } from 'antd-mobile'
// import http from '../../http'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CommonAction from '../../redux/actions/common';
class Register extends Component{
  render () {
    return (
      <div className="loginBox">
        <div className="switchBtn">
          <Button type="ghost" icon="left" inline size="small" onClick={this.props.actions.gotoLogin}>登录</Button>
        </div>
        <div className="logo">
          <img src="/img/logo.png" alt=""/>
        </div>
        <div className="loginMain">
          <div className="inputWrap onePx_bottom">
            <input type="text" ref="username" placeholder="请输入用户名" />
          </div>
          <div className="inputWrap onePx_bottom">
            <input type="password" ref="passwords" placeholder="请输入密码" />
          </div>
          <div className="inputWrap onePx_bottom">
            <input type="text" ref="phone" placeholder="请输入手机号码" />
          </div>
          <div className="loginBtn">
            <Button type="primary">注册</Button>
          </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(CommonAction, dispatch)})
export default (connect(null, mapDispatchToProps)(Register))
