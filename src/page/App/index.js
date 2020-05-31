import React, { Component, Fragment } from 'react'
import { Router, Route, Redirect } from 'react-router-dom'
import Tab from '../../components/tab'
import history from '../../config/history'
import routes from '../../router'
import { ActivityIndicator } from 'antd-mobile'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CommonAction from '../../redux/actions/common'
import Login from '../../page/login'
import Register from '../../page/register'
import http from '../../http'

const tabList = [
  { icon: 'iconfont icon-caidaniconshouyehui', name: '首页', url: '/home' },
  { icon: 'iconfont icon-clone', name: '养殖场', url: '/farm' },
  { icon: 'iconfont icon-sort', name: '用户论坛', url: '/topic' },
  { icon: 'iconfont icon-cart', name: '购物车', url: '/cart' },
  { icon: 'iconfont icon-mine', name: '我的', url: '/mine' },
]
function RenderRouters({ routes }) {
  return routes.map(item => {
    return (
      <Route
        path={item.link}
        key={item.name}
        render={() => (
          <div className={item.isTab ? 'tabPageContent' : 'noTabPageContent'}>
            <item.component />
          </div>
        )}
      />
    )
  })
}

class App extends Component {
  // 验证登录态是否过期
  async componentDidMount() {
    const { errCode } = await http.verifyLogin()
    if (errCode === 0) {
      this.props.actions.loginSuccess()
    }
  }

  render() {
    const { isLoading, isLogin, isRegister } = this.props
    return (
      <div className="App">
        <ActivityIndicator toast text="loading..." animating={isLoading} />
        {isLogin ? (
          <Router history={history}>
            <Fragment>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <RenderRouters routes={routes}></RenderRouters>
              <Tab tabList={tabList}></Tab>
            </Fragment>
          </Router>
        ) : isRegister ? (
          <Register></Register>
        ) : (
          <Login></Login>
        )}
      </div>
    )
  }
}
const mapStateToProps = (state, props) => ({
  isLoading: state.common.isloading,
  isLogin: state.common.isLogin,
  isRegister: state.common.isRegister,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CommonAction, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
