import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

// <T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>
const request = (url: string, data?: any, config?: AxiosRequestConfig): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios.post(url, data, config).then(res => {
            if (res.status === 200) {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }).catch(e => reject(e))
    })
}

const get = (url: string, config?: AxiosRequestConfig): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios.get(url, config).then(res => {
            if (res.status === 200) {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }).catch(e => reject(e))
    })
}


export default request;