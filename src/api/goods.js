
import service from '../service/request'
// 商品列表页API

/**
 * 获取商品的类目
 * @param {*} params 
 * @returns 
 */
export function getSelectOptions(params){
    return service.request({
        method:"get",
        url:"/category/all",
        params
    })
}

/**
 * 查询所有商品
 * @param {
 * page	Number	非必须	获取产品的页码 
 * size	Number	非必须	获取产品每一页的条数
 * searchWord	String	非必须	检索产品的关键词 
 * category	Number	非必须	检索产品的类目} data
 */
export function getProducts(params){
    return service.request({
        method:"get",
        url:"/products/all",
        params
    })
}