import React, {Component, Fragment} from 'react';
import { Progress, Button, WingBlank, Toast, WhiteSpace, List, Steps, Card} from 'antd-mobile';
import {Link, withRouter} from 'react-router-dom'

import * as commonAction from '../../redux/actions/common';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './index.scss'

import Header from '../../components/header'
const Item = List.Item;
const Brief = Item.Brief;

const Step = Steps.Step;

const steps = [{
  title: '猪仔',
  description: '哺乳阶段',
}, {
  title: '幼年',
  description: '保育阶段',
}, {
  title: '成年',
  description: '生长肥育阶段',
}].map((s, i) => <Step key={i} title={s.title} description={s.description} />);


class Order extends Component {
   goBack () {
      const {history:{go}} = this.props
      go(-1)
    }
   state = {
      percent: 50,
    };
   render() {
      const { percent } = this.state;
      return (
         <Fragment>
         
         <Header clickLeft={this.goBack.bind(this)} title="巴克夏猪"></Header>
         <video width="100%" controls="controls" src="/pig.mp4" >
         
         你的浏览器不支持video
       </video>
       <List renderHeader={() => '生长状况'} className="my-list">
        <Item multipleLine >
          体重 <Brief>500.32kg</Brief>
        </Item>
        <Item multipleLine >
          身长 <Brief>120cm</Brief>
        </Item>
        <Item multipleLine>
          生长时间 <Brief>50天</Brief>
        </Item>
        <Item multipleLine>
          健康状况 <Brief>良好</Brief>
        </Item>
      </List>
      <Button onClick={() => { Toast.loading('喂养中...', 2, () => {
         Toast.success('喂食成功', .5);
       });}}>点击喂食</Button><WhiteSpace />
         </Fragment>
         
      )
   }
}

const mapStateToProps = (state, props) => ({...state.common})
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(commonAction, dispatch)})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Order))
