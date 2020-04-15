import React from 'react'
import ReactDOM from 'react-dom'
import './assets/common.scss'
import './assets/reset.css'
import './config/rem'
import App from './page/App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import Reducers from './redux/reducers'
import rootSaga from './redux/sagas'

// 修改了reducer请更新版本号！！！
// const LoadData = newVersion => {
//   const easyMarket_version =
//     JSON.parse(localStorage.getItem('easyMarket_version')) || ''
//   let initData = undefined
//   if (newVersion === easyMarket_version) {
//     initData = JSON.parse(localStorage.getItem('easyMarket_initData'))
//   } else {
//     localStorage.setItem('easyMarket_version', newVersion)
//   }
//   return initData
// }
const sagaMiddleware = createSagaMiddleware()


// 配置调试工具
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  Reducers,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// window.onbeforeunload = () => {
//   const state = store.getState()
//   localStorage.setItem('easyMarket_initData', JSON.stringify(state))
// }

serviceWorker.unregister()
