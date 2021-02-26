/* 存放详情页的相关网络请求函数*/
import {request} from './request'

//请求详情页数据
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

//商品详情信息
export class GoodsInfo {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.discountBgColor = itemInfo.discountBgColor;
    this.realPrice =itemInfo.lowNowPrice;
  }
}

//详情页商家信息
export class Shop{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name  = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

//商品参数
export class GoodsParam{
  constructor(info,rule){
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

//请求推荐信息

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

