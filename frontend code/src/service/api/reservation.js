import http from '../httpService'
import config from '../config.json'

export const searchReservationService=()=>{
   return http.post(config.tourgard+"/reservation/search")
}

export const createReservationService=(data)=>{
    return http.post(`${config.tourgard}/reservation/create`,data)
}

export const findReservationService=(uuid)=>{
    return http.get(`${config.tourgard}/reservation/find/${uuid}`)
}