import actionTypes from '../actions/actionTypes'

const initState = {
  count: 0,
  goodsList: [],
  typedGoodsList: []
}
export default function goods(state=initState, action) {
  const {count,type,goodsList, typedGoodsList} = action
  switch (type){
    case actionTypes.GOODS_COUNT_GETDATA_SUCCESS: return {...state,count};
    case actionTypes.GOODS_COUNT_GETDATA_FAILURE: return state;
    case actionTypes.GOODS_LIST_GETDATA_SUCCESS: return {...state,goodsList};
    case actionTypes.GOODS_LIST_GETDATA_FAILURE: return state;
    case actionTypes.TYPED_GOODS_LIST_GETDATA_SUCCESS: return {...state,typedGoodsList};
    case actionTypes.TYPED_GOODS_LIST_GETDATA_FAILURE: return state;
    default: return state
  }
}