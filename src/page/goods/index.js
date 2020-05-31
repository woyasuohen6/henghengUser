/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../../components/header'
import './index.scss'
import http from '../../http'
import ImgLazyLoad from '../../components/imgLazyLoad'
import { Carousel, Toast } from 'antd-mobile'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as commonAction from '../../redux/actions/common'
import { Modal } from 'antd-mobile'
class Goods extends Component {
  state = {
    info: {
      goodsName: '',
      subTitle: '',
      goods_desc: null,
      imgList: [],
    },
    brand: {},
    gallery: [],
    comment: {},
    attribute: [],
    issue: [],
    goodsList: [],
    specificationList: [],
    productList: [],
    goodsCount: 0,
    userHasCollect: 0,
    goodsBuyNum: 0,
    isShowSize: false,
  }

  /*获取商品相关信息*/
  async fetchData(id) {
    const { actions } = this.props
    try {
      actions.startLoading()
      const data = await http.getGoodsDetail({ commodityId: id })
      let {
        imgList,
        img_url,
        _id,
        name,
        price,
        description,
        predictTime,
        type,
        endTime,
        startTime,
        address,
        profit,
        merchantId,
      } = data.data
      this.setState({
        info: {
          img_url,
          _id,
          name,
          price,
          description,
          predictTime,
          type,
          endTime,
          startTime,
          address,
          profit,
          merchantId,
          imgList,
        },
      })
      actions.endLoading()
    } catch (e) {
      actions.endLoading()
      throw e
    }
  }
  /*修改购买数量*/
  changeBuyNum(val,) {
    if (
      this.state.goodsBuyNum + val >= 0    ) {
      this.setState({
        goodsBuyNum: this.state.goodsBuyNum + val,
      })
    }
  }

  goBack() {
    const {
      history: { go },
    } = this.props
    go(-1)
  }

  changeIsShowSize () {
    this.setState({
      isShowSize: !this.state.isShowSize
    })
  }

  /*添加到购物车*/
  async addCart(priceId, goodsBuyNum, isShowSize) {
    if (!isShowSize) {
      this.setState({ isShowSize: true })
      return null
    }
    console.log(this.state)
    // if (goodsBuyNum < 1) {
    //   Toast.fail('请选择商品数量', 1)
    //   return null
    // }
    // const { errno, errmsg } = await http.postAddCart({
    //   goodsId: this.props.match.params.id,
    //   number: goodsBuyNum,
    //   productId: priceId,
    // })
    // if (errno === 0) {
    //   Toast.success('添加成功！', 0.5, () => {
    //     this.fetchCartNum()
    //   })
    // } else {
    //   Toast.fail(errmsg, 0.5, () => {
    //     if (errno === 401) {
    //       this.props.actions.loginFailure()
    //     }
    //   })
    // }
  }
  /*支付订单*/
  payGoods() {
    Toast.loading('下单功能还未GET,耐心等待~', 1)
  }
  componentDidMount() {
    this.fetchData(this.props.match.params.id)
  }
  render() {
    const {
      info: {
        img_url,
        _id,
        name,
        price,
        description,
        predictTime,
        type,
        endTime,
        startTime,
        address,
        profit,
        merchantId,
        imgList,
      },

      isShowSize,
      goodsBuyNum,
      specificationList,
    } = this.state
    const {
      history: { push },
      isloading,
    } = this.props
    return !isloading ? (
      <div className="goodsPage">
        <Modal
          popup
          visible={isShowSize}
          animationType="slide-up"
        >
          <div className="goodsSizeDo">
            <div className="goodsSizeSetMsg">
              <img src={img_url} alt="goods" />
              <div className="gooodsSizePriceAndSize">
                <div>
                  单价: <span>￥{price}</span>
                </div>
                <div>
                  库存: <span>999</span>
                </div>
              </div>
              <div
                className="closeModel"
                onClick={this.changeIsShowSize.bind(this)}
              >
                <i className="iconfont icon-cc-close-square"></i>
              </div>
            </div>
            <div className="goodsSizeWrap">
              {specificationList.map((item, index) => (
                <div className="goodsSizeItem" key={item.specification_id}>
                  <div className="goodsSizeItemName">{item.name}</div>
                  <div className="goodsSizeListWrap">
                    {item.valueList.map(temp => (
                      <div
                        className={
                          item.activeId === temp.id
                            ? 'goodsSizeListItem active'
                            : 'goodsSizeListItem'
                        }
                        key={temp.id}
                      >
                        {temp.value}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="goodsSizeItem">
                <div className="goodsSizeItemName">数量</div>
                <div className="goodsSizeListWrap">
                  <div className="goodsBuyCount">
                    <div
                      className="onePx_border"
                      onClick={this.changeBuyNum.bind(this, -1)}
                    >
                      -
                    </div>
                    <div className="onePx_border">{goodsBuyNum}</div>
                    <div
                      className="onePx_border"
                      onClick={this.changeBuyNum.bind(this, 1)}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="goodsDoWrap">
            <div>加入购物车</div>
            <div onClick={this.payGoods.bind(this)}>立即养殖</div>
          </div>
        </Modal>
        <Header clickLeft={this.goBack.bind(this)} title={name}></Header>
        <Carousel autoplay infinite>
          {imgList.map((item, index) => (
            <div className="goodsBannerItem" key={index}>
              <ImgLazyLoad offSetTop={0} realUrl={item}></ImgLazyLoad>
            </div>
          ))}
        </Carousel>
        <ul className="serviceList">
          <li>
            <span>★</span>养殖全程看护
          </li>
          <li>
            <span>★</span>风险规避
          </li>
          <li>
            <span>★</span>配送包邮
          </li>
        </ul>
        <div className="goodsMsgWrap">
          <div className="goodsNameTitle">{name}</div>
          <div className="goodsPriceTitle">{price}</div>
          <div
            className="goodsBrandTitle"
            onClick={() => {
              push(`/brandDetail/${merchantId}`)
            }}
          >
            <div>{address}</div>
          </div>
        </div>
        <div className="goodsAttribute">
          <div className="goodsAttributeLine">养殖参数</div>
          <div className="goodsAttributeList">
            <div className="goodsAttributeItem">
              <div className="attributeLabel">介绍信息</div>
              <div className="attributeContent">{description}</div>
            </div>
            <div className="goodsAttributeItem">
              <div className="attributeLabel">生长周期</div>
              <div className="attributeContent">
                {predictTime + '天'}
              </div>
            </div>
            <div className="goodsAttributeItem">
              <div className="attributeLabel">播种时间</div>
              <div className="attributeContent">
                {new Date(startTime).toString()}
              </div>
            </div>
            <div className="goodsAttributeItem">
              <div className="attributeLabel">成熟时间</div>
              <div className="attributeContent">
                {new Date(endTime).toString()}
              </div>
            </div>
            <div className="goodsAttributeItem">
              <div className="attributeLabel">预计收益</div>
              <div className="attributeContent">{profit}</div>
            </div>
            <div className="goodsAttributeItem">
              <div className="attributeLabel">种植地址</div>
              <div className="attributeContent">{address}</div>
            </div>
          </div>
        </div>
        <div className="goodsPageDo">
          <div className={'isLike like'}>★</div>
          <div
            className="cartNum"
            onClick={() => {
              push(`/cart`)
            }}
          >
            <i className="iconfont icon-Add-Cart"></i>
          </div>
          <div className="addCart" onClick={this.addCart.bind(this)}>
            加入购物车
          </div>
          <div className="payGoods">立即购买</div>
        </div>
      </div>
    ) : null
  }
}

const mapStateToProps = (state, props) => ({ ...state.common })
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(commonAction, dispatch),
})
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Goods),
)
