import http from '../httpService'
import config from '../config.json'

export const getUserCoreDataService=(phone)=>{
    return http.post(`${config.tourgard}/customer/login`,phone)
}