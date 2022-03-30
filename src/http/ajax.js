// 封装Ajax函数
// 传入参数对象
/**
 * options = {
 *  url: '',
 *  method: '',
 *  data: '',  post请求参数
 *  params: '', get请求参数
 * }
 * 
 */

const http = function(options) {
    var defaultVal = {
        url: '',
        method: 'get',
        data: {},
        params: {},
        headers: {}
    }
    return new Promise((resolve, reject) => {

    })
}

export default http