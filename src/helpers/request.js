import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' //规定参数类型
axios.defaults.baseURL = 'https://blog-server.hunger-valley.com' //后端接口线上地址根路径
axios.defaults.withCredentials = true //告诉浏览器异步请求也带上cookies

export default function request(url, type = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        let option = {
            url,
            method: type
        }
        if (type.toLowerCase() === 'get') {
            option.params = data
        } else {
            option.data = data
        }
        axios(option).then(res => {
            console.log(res.data)
            if (res.data.status === 'ok') {
                resolve(res.data)
            } else {
                Message.error(res.data.msg)
                reject(res.data)
            }
        }).catch(err => {
            Message.error('网络异常')
            reject({ msg: '网络异常' })
        })
    })
}
