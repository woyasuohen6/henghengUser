export default {
  /**
   * 验证登录状态
   */
  VERIFY_LOGIN_STATUS: 'VERIFY_LOGIN_STATUS',
  /*
   * 登录
   * COMMON
   * CHECK_LOGIN_SUCCESS：登录成功
   * CHECK_LOGIN_FAILURE：登录失败
   * */
  CHECK_LOGIN_FAILURE: 'CHECK_LOGIN_FAILURE',
  CHECK_LOGIN_SUCCESS: 'CHECK_LOGIN_SUCCESS',


  /*
   *注册
   *COMMON
   *GOTO_REGISTER_PAGE: 跳转注册页面
   *GOTO_LOGIN_PAGE：跳转登录页面
   */
  GOTO_REGISTER_PAGE: 'GOTO_REGISTER_PAGE',
  GOTO_LOGIN_PAGE: 'GOTO_LOGIN_PAGE',

  /*
   * 加载状态
   * COMMON
   * Loading开始
   * Loading结束
   * */
  LOADING_START: 'LOADING_START',
  LOADING_END: 'LOADING_END',

  /*
   * HOME
   * 首页
   * HOME_GETDATA_REQUEST: 首页数据请求
   * HOME_GETDATA_SUCCESS：首页数据请求成功
   * HOME_GETDATA_FAILURE：首页数据请求失败
   * */
  HOME_GETDATA_REQUEST: 'HOME_GETDATA_REQUEST',
  HOME_GETDATA_SUCCESS: 'HOME_GETDATA_SUCCESS',
  HOME_GETDATA_FAILURE: 'HOME_GETDATA_FAILURE',

  /*
   * 专题
   * TOPOIC
   * TOPIC_GETDATA_REQUEST: 专题数据请求
   * TOPIC_GETDATA_SUCCESS：专题数据请求成功
   * TOPIC_GETDATA_FAILURE：专题数据请求失败
   * */
  TOPIC_GETDATA_REQUEST: 'TOPIC_GETDATA_REQUEST',
  TOPIC_GETDATA_SUCCESS: 'TOPIC_GETDATA_SUCCESS',
  TOPIC_GETDATA_FAILURE: 'TOPIC_GETDATA_FAILURE',

  /*
   * 专题详情
   * TOPOICDETAIL
   * TOPOICDETAIL_GETDATA_REQUEST: 专题数据请求
   * TOPOICDETAIL_GETDATA_SUCCESS：专题数据请求成功
   * TOPOICDETAIL_GETDATA_FAILURE：专题数据请求失败
   * */
  TOPOICDETAIL_GETDATA_REQUEST: 'TOPOICDETAIL_GETDATA_REQUEST',
  TOPOICDETAIL_GETDATA_SUCCESS: 'TOPOICDETAIL_GETDATA_SUCCESS',
  TOPOICDETAIL_GETDATA_FAILURE: 'TOPOICDETAIL_GETDATA_FAILURE',

  /*
   * 评论
   * COMMENT
   * COMMENT_GETDATA_REQUEST: 评论请求
   * COMMENT_GETDATA_SUCCESS：评论请求成功
   * COMMENT_GETDATA_FAILURE：评论请求失败
   * */
  COMMENT_GETDATA_REQUEST: 'COMMENT_GETDATA_REQUEST',
  COMMENT_GETDATA_SUCCESS: 'COMMENT_GETDATA_SUCCESS',
  COMMENT_GETDATA_FAILURE: 'COMMENT_GETDATA_FAILURE',

  /*
   * 精选分类Tab
   * CATAGORY
   * CATAGORY_NAV_GETDATA_REQUEST: 分类Tab数据请求
   * CATAGORY_NAV_GETDATA_SUCCESS：分类Tab请求成功
   * CATAGORY_NAV_GETDATA_FAILURE：分类Tab请求失败
   * */
  CATAGORY_NAV_GETDATA_REQUEST: 'CATAGORY_NAV_GETDATA_REQUEST',
  CATAGORY_NAV_GETDATA_SUCCESS: 'CATAGORY_NAV_GETDATA_SUCCESS',
  CATAGORY_NAV_GETDATA_FAILURE: 'CATAGORY_NAV_GETDATA_FAILURE',

  /*
   * CATALOG
   * 分类页中初始化tab数据和当前分类数据
   * CATALOG_INITDATA_GETDATA_REQUEST: 数据请求
   * CATALOG_INITDATA_GETDATA_SUCCESS: 请求成功
   * CATALOG_INITDATA_GETDATA_FAILURE: 请求失败
   * */
  CATALOG_INITDATA_GETDATA_REQUEST: 'CATALOG_INITDATA_GETDATA_REQUEST',
  CATALOG_INITDATA_GETDATA_SUCCESS: 'CATALOG_INITDATA_GETDATA_SUCCESS',
  CATALOG_INITDATA_GETDATA_FAILURE: 'CATALOG_INITDATA_GETDATA_FAILURE',

  /*
   * CATALOG
   * 根据分类ID获取当前商品分类信息跟子分类
   * CATALOG_CATALOGMSG_GETDATA_REQUEST: 数据请求
   * CATALOG_CATALOGMSG_GETDATA_SUCCESS: 请求成功
   * CATALOG_CATALOGMSG_GETDATA_FAILURE: 请求失败
   * */
  CATALOG_CATALOGMSG_GETDATA_REQUEST: 'CATALOG_CATALOGMSG_GETDATA_REQUEST',
  CATALOG_CATALOGMSG_GETDATA_SUCCESS: 'CATALOG_CATALOGMSG_GETDATA_SUCCESS',
  CATALOG_CATALOGMSG_GETDATA_FAILURE: 'CATALOG_CATALOGMSG_GETDATA_FAILURE',

  /*
   * CATALOG
   * 修改分类页面的请求分类ID跟当前TabIndex值
   * */
  CATALOG_CHANGEIDANDTABINDEX: 'CATALOG_CHANGEIDANDTABINDEX',

  /*
   * GOODS
   * 在售商品数量
   * GOODS_COUNT_GETDATA_REQUSET: 数据请求
   * GOODS_COUNT_GETDATA_SUCCESS: 请求成功
   * GOODS_COUNT_GETDATA_FAILURE: 请求失败
   * */
  GOODS_COUNT_GETDATA_REQUSET: 'GOODS_COUNT_GETDATA_REQUSET',
  GOODS_COUNT_GETDATA_SUCCESS: 'GOODS_COUNT_GETDATA_SUCCESS',
  GOODS_COUNT_GETDATA_FAILURE: 'GOODS_COUNT_GETDATA_FAILURE',
  /*
   * GOODSSEARCH
   * 商品查询
   * GOODSSEARCH_GETDATA_SUCCESS: 数据请求成功
   * GOODSSEARCH_GETDATA_REQUEST: 请求
   * GOODSSEARCH_GETDATA_FAILURE：失败
   * GOODSSEARCH_CHANGE_PARMAS: 修改请求参数
   * GOODSSEARCH_RESET_STATE: 还原初始化数据
   * GOODSSEARCH_CHANGE_SEARCHVAL_PARMAS: 修改查询的input的值
   * GOODSSEARCH_CHANGE_SORT_PARMAS: 修改排序类别
   * GOODSSEARCH_CHANGE_CATEGORYID_PARMAS: 修改分类
   * */
  GOODSSEARCH_GETDATA_SUCCESS: 'GOODSSEARCH_GETDATA_SUCCESS',
  GOODSSEARCH_GETDATA_REQUEST: 'GOODSSEARCH_GETDATA_REQUEST',
  GOODSSEARCH_GETDATA_FAILURE: 'GOODSSEARCH_GETDATA_FAILURE',
  GOODSSEARCH_CHANGE_PARMAS: 'GOODSSEARCH_CHANGE_PARMAS',
  GOODSSEARCH_RESET_STATE: 'GOODSSEARCH_RESET_STATE',
  GOODSSEARCH_CHANGE_SEARCHVAL_PARMAS: 'GOODSSEARCH_CHANGE_SEARCHVAL_PARMAS',
  GOODSSEARCH_CHANGE_SORT_PARMAS: 'GOODSSEARCH_CHANGE_SORT_PARMAS',
  GOODSSEARCH_CHANGE_CATEGORYID_PARMAS: 'GOODSSEARCH_CHANGE_CATEGORYID_PARMAS',
  /*
   * GOODS
   * 获取商品数据
   * GOODS_LIST_GETDATA_REQUSET: 数据请求
   * GOODS_LIST_GETDATA_SUCCESS: 请求成功
   * GOODS_LIST_GETDATA_FAILURE: 请求失败
   * */
  GOODS_LIST_GETDATA_REQUSET: 'GOODS_LIST_GETDATA_REQUSET',
  GOODS_LIST_GETDATA_SUCCESS: 'GOODS_LIST_GETDATA_SUCCESS',
  GOODS_LIST_GETDATA_FAILURE: 'GOODS_LIST_GETDATA_FAILURE',


  /**
   * 按类别获取商品数据
   * TYPED_GOODS_LIST_GETDATA_REQUSET：数据请求
   * TYPED_GOODS_LIST_GETDATA_SUCCESS: 请求成功
   * TYPED_GOODS_LIST_GETDATA_FAILURE: 请求失败
   * 
   */
  TYPED_GOODS_LIST_GETDATA_REQUSET: 'TYPED_GOODS_LIST_GETDATA_REQUSET',
  TYPED_GOODS_LIST_GETDATA_SUCCESS: 'TYPED_GOODS_LIST_GETDATA_SUCCESS',
  TYPED_GOODS_LIST_GETDATA_FAILURE: 'TYPED_GOODS_LIST_GETDATA_FAILURE',

  /*
   * BRAND
   * 制造商详情
   * BRAND_DETAIL_GETDATA_REQUSET: 数据请求
   * BRAND_DETAIL_GETDATA_SUCCESS: 请求成功
   * BRAND_DETAIL_GETDATA_FAILURE: 请求失败
   * */
  BRAND_DETAIL_GETDATA_REQUSET: 'BRAND_DETAIL_GETDATA_REQUSET',
  BRAND_DETAIL_GETDATA_SUCCESS: 'BRAND_DETAIL_GETDATA_SUCCESS',
  BRAND_DETAIL_GETDATA_FAILURE: 'BRAND_DETAIL_GETDATA_FAILURE',

  /*
   * BRAND
   * 制造商相关商品
   * BRAND_GOODS_GETDATA_REQUSET: 数据请求
   * BRAND_GOODS_GETDATA_SUCCESS: 请求成功
   * BRAND_GOODS_GETDATA_FAILURE: 请求失败
   * */
  BRAND_GOODS_GETDATA_REQUSET: 'BRAND_GOODS_GETDATA_REQUSET',
  BRAND_GOODS_GETDATA_SUCCESS: 'BRAND_GOODS_GETDATA_SUCCESS',
  BRAND_GOODS_GETDATA_FAILURE: 'BRAND_GOODS_GETDATA_FAILURE',

  /*
   * COLLECT
   * 已收藏商品
   * COLLECT_GETDATA_REQUSET: 数据请求
   * COLLECT_GETDATA_SUCCESS: 请求成功
   * COLLECT_GETDATA_FAILURE: 请求失败
   * */
  COLLECT_GETDATA_REQUSET: 'COLLECT_GETDATA_REQUSET',
  COLLECT_GETDATA_SUCCESS: 'COLLECT_GETDATA_SUCCESS',
  COLLECT_GETDATA_FAILURE: 'COLLECT_GETDATA_FAILURE'
}