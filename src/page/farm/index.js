import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as topicAction from '../../redux/actions/topic'
import { Link } from 'react-router-dom'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'

import './index.css'
class Farm extends Component {
  render() {
    return (
      <Fragment>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title="巴克夏猪"
            />
            <Card.Body>
              <div>养殖场地：重庆巴南牧场</div>
            </Card.Body>
            <Link to={`/order`}>

              <Card.Footer content="养殖数量：2头" extra={<div>点击查看详情</div>} />
            </Link>

          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>

        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title="水稻"
            />
            <Card.Body>
              <div>种植场地：重庆美庄农场</div>
            </Card.Body>
            <Link to={`/order`}>
              <Card.Footer content="种植数量：100kg" extra={<div>点击查看详情</div>} />
            </Link>
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      </Fragment>
    )
  }
}
const mapStateToProps = (state, props) => ({ ...state.topic })
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(topicAction, dispatch)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Farm)
