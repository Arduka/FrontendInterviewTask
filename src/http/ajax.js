function formatData(data) {
    let temp = ''
    for (let i in data) {
        temp += i + '=' + data + '&'
    }
    return temp.slice(0, -1)
}

const http = function(protoOptions) {
    var defaultVal = {
        url: '',
        method: 'get',
        data: null, //get请求数据
        params: null,   //post请求数据
        async: true,
        headers: {} //请求头部
    }
    var options = {}
    for(let key in protoOptions){
        options[key] = protoOptions[key] || defaultVal[key]
    }

    let query = ''
    let param = null
    const regex = new RegExp('application/x-www-form-urlencoded')
    if(options.method.toLowerCase()==='get'){
        if (options.data) {
            query = '?' + encodeURI(formatData(options.data))
        }
    }else{
        if(regex.test(options.headers['content-type'])){
            if (options.params) {
                param = formatData(options.params)
            }
        }else{
            param = options.params
        }
    }

    let xhr = null
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
        // eslint-disable-next-line no-undef
        xhr = new ActiveXObject('Microsoft.XMLHttp') // IE
    } else {
        throw new Error('您的浏览器不支持ajax, 请升级')
    }

    let url = options.url
    let method = options.method
    let async = options.async

    return new Promise((resolve, reject) => {

        xhr.open(method, method === 'post' ? url : url +  query, async)

        // if(options.method==='post'){
        //     // 默认post发送json数据
        //     xhr.setRequestHeader('content-type', 'application/json;charset=utf-8')
        // }

        if(param instanceof FormData){
            // formData数据不设置content-type
        }else if(param instanceof String){
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
        }else{
            xhr.setRequestHeader('content-type', 'application/json;charset=utf-8')
            param = JSON.stringify(param)
        }

        for(let key in options.headers){
            if(key==='content-type'){
                continue
            }
            xhr.setRequestHeader(key, options.headers[key])
        }
    })
}

export default http