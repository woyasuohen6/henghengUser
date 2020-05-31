import React, {Component, Fragment} from 'react'
import GoodsList from '../../components/common/goodsList'
import {withRouter} from 'react-router-dom'
import './index.scss'
import Header from '../../components/header'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categorysAction from '../../redux/actions/categorys';
import * as goodsAction from '../../redux/actions/goods';

const typeList = ['农场', '牧场', '菜园', '果园']
class Categors extends Component{
  state = {
    currentCategoryId: 0
  }
  goBack () {
    this.props.history.go(-1)
  }
  componentWillMount() {
    const { match:{params:{id}},goodsAction:{fetchTypedGoodsData} } = this.props
    this.setState({
      typeId: id - 1
    })
    fetchTypedGoodsData({typeId:id})
  }
  render () {
    const { typedGoodsList } = this.props
    return (
      <Fragment>
      <Header clickLeft={this.goBack.bind(this)} title={typeList[this.state.typeId]}></Header>
        <div className="goodsList">
          <GoodsList goodsList={typedGoodsList}></GoodsList>
        </div>
      </Fragment>
    )
  }
}
const mapStateToProps = (state, props) => ({
    ...state.catrgorys,
    typedGoodsList: state.goods.typedGoodsList
  })

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(categorysAction, dispatch),
    goodsAction: bindActionCreators(goodsAction, dispatch)
  })
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categors))
