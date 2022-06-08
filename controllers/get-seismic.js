import axios from 'axios'
import API_ENDPOINT from '../global/api-endpoint.js'

export const EQNew = async(req,res)=>{
    try {
        let response = await axios.get(`${API_ENDPOINT.LIST_EARTHQUAKE}/autogempa.json`)
        res.send(response.data)
    } catch (error) {
        console.log(error)
    }
}
export const EQBig = async(req,res)=>{
    try {
        let response = await axios.get(`${API_ENDPOINT.LIST_EARTHQUAKE}/gempaterkini.json`)
        res.send(response.data)
    } catch (error) {
        console.log(error)
    }
}
export const EQSmall = async(req,res)=>{
    try {
        let response = await axios.get(`${API_ENDPOINT.LIST_EARTHQUAKE}/gempadirasakan.json`)
        res.send(response.data)
    } catch (error) {
        console.log(error)
    }
}