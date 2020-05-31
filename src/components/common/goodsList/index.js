import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
import ImgLazyLoad from '../../imgLazyLoad'
class GoodsList extends Component{
  render () {
    const { goodsList } = this.props
    // let goodsList = []
    console.log(goodsList)
    return (
        <div className="goodsList">
          {
            goodsList.map((item) => {
            return(
              <Link to={`/goods/${item._id}`} key={item._id} className="goodsItem">
                <div className="goodsItemImg">
                  <ImgLazyLoad
                    offSetTop={44}
                    realUrl = {item.img_url}>
                  </ImgLazyLoad>
                </div>
                <div className="goodsItemName">{item.name}</div>
                <div className="goodsItemPrice">￥{item.price}</div>
              </Link>
            )
          })}
        </div>
    )
  }
}
export default GoodsList
