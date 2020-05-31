import React, { Component } from 'react'
import { Modal, Button } from 'antd-mobile'
import './index.scss'
import Header from '../../components/header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as commonAction from '../../redux/actions/common'
import { withRouter } from 'react-router-dom'
import delAddress from '../../static/img/del-address.png'
import http from '../../http'
import AddressSet from '../../components/addressSet'

class Address extends Component {
  state = {
    addressList: [],
    addressDo: false,
    addressDoType: -1,
    addressInfo: {}
  }

  goBack() {
    this.props.history.go(-1)
  }
  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    this.props.actions.startLoading()
    // const data = await http.getAddressList()
    this.setState({ addressList: [{"id":30,"name":"任崇伟","user_id":16,"country_id":0,"province_id":23,"city_id":270,"district_id":2679,"address":"重庆邮电大学","mobile":"13186671773","is_default":0,"province_name":"重庆","city_name":"重庆市","district_name":"南岸区","full_region":"重庆重庆市南岸区"}] }, () => {
      this.props.actions.endLoading()
    })
  }

  deleteAddress(id) {
    const alertInstance = Modal.alert('删除', '您确定删除该地址吗????', [
      {
        text: '否',
        onPress: () => {
          alertInstance.close()
        }
      },
      {
        text: '是',
        onPress: async () => {
          this.props.actions.startLoading()
        }
      }
    ])
  }
  showAddressDo(status, type) {
    this.setState({
      addressDo: status,
      addressDoType: type
    })
  }
  async closeAddressDo(parmas) {
    const data = await http.postAddAddress(parmas)
    if (data.errno === 0) {
      this.fetchData()
      this.setState({
        addressDo: false
      })
    }
  }
  changeAddress(item) {
    this.setState({
      addressInfo: { ...item },
      addressDo: true,
      addressDoType: -1
    })
  }

  closeDo = () => {
    this.setState({
      addressDo: false
    })
  }
  render() {
    return (
      <div id="addressPage">
        <Header clickLeft={this.goBack.bind(this)} title="地址管理" />
        {this.state.addressDo ? (
          <AddressSet
            closeDo={this.closeDo}
            addressInfo={this.state.addressInfo}
            addressDoType={this.state.addressDoType}
            closeAddressDo={this.closeAddressDo.bind(this)}
          />
        ) : null}
        {this.state.addressList.length !== 0 && (
          <div className="addressList">
            {this.state.addressList.map(item => (
              <div
                className="addressItem"
                onClick={this.changeAddress.bind(this, item)}
                key={item.id}
              >
                {item.is_default === 1 && <div className="isChooseAddress" />}
                <div className="addressMsg">
                  <div className="concatName">{item.name}</div>
                  <div className="addressDetail">
                    <div className="concatPhone">{item.mobile}</div>
                    <div className="concatAddress">{item.full_region}</div>
                    <div className="concatAddress">{item.address}</div>
                  </div>
                  <div
                    className="deleteAddress"
                    onClick={event => {
                      event.stopPropagation()
                      this.deleteAddress(item.id)
                    }}
                  >
                    <img src={delAddress} alt="delAddress" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="addAddress">
          <Button
            type="primary"
            onClick={this.showAddressDo.bind(this, true, 1)}
            inline
            style={{
              marginRight: '4px',
              lineHeight: '1rem',
              height: '1rem',
              width: '100%',
              borderRadius: 0
            }}
          >
            新建地址
          </Button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, props) => ({ ...state.common })
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(commonAction, dispatch)
})
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Address)
)
