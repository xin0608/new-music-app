// 网络请求
import axios from "axios";
const ajax = axios.create({//自定义axios对象(ajax就是axios)
    baseURL: 'http://localhost:3000/'//服务器基地址
})

export default ajax;//相当于导出了一个axios函数