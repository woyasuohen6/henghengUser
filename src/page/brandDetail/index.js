import React, {Component, Fragment} from 'react'
import GoodsList from '../../components/common/goodsList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {withRouter} from 'react-router-dom'
import Header from '../../components/header'
import * as goodsAction from '../../redux/actions/goods'
import * as brandAction from '../../redux/actions/brand'
import './index.scss'
import ImgLazyLoad from '../../components/imgLazyLoad'
class BrandDetail extends Component{
  goBack () {
    const {history:{go}} = this.props
    go(-1)
  }
  componentWillMount () {
    const {match:{params:{id}},goodsAction:{fetchGoodsData}, brandAction:{fetchBrandDetail}} = this.props;
    fetchBrandDetail({merchantId: id})
    fetchGoodsData({merchantId: id})
  }

  loadImg(brandDetail) {
    if(brandDetail.img_url) {
      return (
        <ImgLazyLoad
            offSetTop={44}
            realUrl = {brandDetail.img_url}>
        </ImgLazyLoad>
      )
    } 
  }

  render () {
    const {brandDetail,goodsList} = this.props
    return (
      <Fragment>
        <Header clickLeft={this.goBack.bind(this)} title={brandDetail.name}></Header>
        <div className="brandDetail">
          {this.loadImg(brandDetail)}
          <div className="breadDesc">
            {brandDetail.description}
          </div>
        </div>
        <div className="brandGoodsList">
          <div className="goodsListWrap">
            <GoodsList goodsList={goodsList}></GoodsList>
          </div>
        </div>
      </Fragment>
    )
  }
}
const mapStateToProps = (state, props) => ({
    ...state.brand,
    goodsList: state.goods.goodsList
  })
const mapDispatchToProps = dispatch => ({
    goodsAction: bindActionCreators(goodsAction, dispatch),
    brandAction: bindActionCreators(brandAction, dispatch)
  })
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BrandDetail))
