import React, { Component,Fragment } from 'react';
import './index.scss'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeAction from '../../redux/actions/home';
import { Carousel } from 'antd-mobile';
import {Link} from 'react-router-dom'
import ImgLazyLoad from '../../components/imgLazyLoad'
   
const Brand = ({brandList}) => {
  if(brandList){
    return (
      <div className="brandBox">
        <div className="brandTitle">合作农家</div>
        <div className="brandWrap">
          {
            brandList.map(item => (
              <Link to={`/brandDetail/${item._id}`} className="brandItem" key={item._id}>
                <div className="brandItemName">{item.name}</div>
                <ImgLazyLoad
                  offSetTop={0}
                  realUrl = {item.img_url}>
                </ImgLazyLoad>
              </Link>
            ))
          }
        </div>
      </div>
    )
  }else{
    return null
  }
}

const Channel = ({channel}) => {
  if(channel){
    return (
      <div className="channelWrap">
        {channel.map(item => (
          <Link className="channelItem" to={`/categorys/${item.id}`} key={item.id}>
            <ImgLazyLoad
              offSetTop={44}
              realUrl = {item.icon_url}>
            </ImgLazyLoad>
            <div>{item.name}</div>
          </Link>
        ))}
      </div>
    )
  }else{
    return null
  }
}

const NewGoods = ({newGoodsList}) =>{
  return (
    <div className="newGoodsBox">
      <div className="newGoodsTitle">当季产品</div>
      <div className="newGoodsWrap">
        {
          newGoodsList.map(item => (
            <Link to={`/goods/${item._id}`} className="newGoodsItem" key={item._id}>
              <ImgLazyLoad
                offSetTop={44}
                realUrl = {item.img_url}>
              </ImgLazyLoad>
              <div className="newGoodsName">{item.name}</div>
              <div className="newGoodsPrice">￥{item.price}</div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

class App extends Component {

  componentDidMount() {
    this.props.actions.fetchData()
  }

  render() {
    const {
      banner,
      newGoodsList,
      channel,
      brandList,
    } = this.props
    return (
      <Fragment>
        <Carousel autoplay infinite>
          {banner.map(item => (
            <div className="bannerImg"
                 key={item.id}>
              <ImgLazyLoad
                offSetTop={0}
                realUrl = {item.image_url}>
              </ImgLazyLoad>
            </div>
          ))}
        </Carousel>
        <Channel channel={channel}></Channel>

        <Brand brandList={brandList}></Brand>

        <NewGoods newGoodsList={newGoodsList}></NewGoods>



      </Fragment>
    )
  }
}
const mapStateToProps = (state, props) => ({...state.home})
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(homeAction, dispatch)})
export default connect(mapStateToProps, mapDispatchToProps)(App)
