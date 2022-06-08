import * as txml from 'txml'
import axios from 'axios'
import API_ENDPOINT from '../global/api-endpoint.js'

export const getWeather = async(req,res) => {    
    try {
        let provinsi = req.params.provinsi
        console.log(provinsi)
        let response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-Indonesia.xml`)
        if(provinsi === "jawa-timur"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-JawaTimur.xml`)
        }else if(provinsi === "banten"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-Banten.xml`)
        }else if(provinsi === "jakarta"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-DKIJakarta.xml`)
        }else if(provinsi === "jawa-barat"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-JawaBarat.xml`)
        }else if(provinsi === "jawa-tengah"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-JawaTengah.xml`)
        }else if(provinsi === "diyogyakarta"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-DIYogyakarta.xml`)
        }else if(provinsi === "papua"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-Papua.xml`)
        }else if(provinsi === "papua-barat"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-PapuaBarat.xml`)
        }else if(provinsi === "maluku"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-Maluku.xml`)
        }else if(provinsi === "maluku-utara"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-MalukuUtara.xml`)
        }else if(provinsi === "aceh"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-Aceh.xml`)
        }else if(provinsi === "sumatera-utara"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-SumateraUtara.xml`)
        }else if(provinsi === "sumatera-selatan"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-SumateraSelatan.xml`)
        }else if(provinsi === "sumatera-barat"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-SumateraBarat.xml`)
        }else if(provinsi === "riau"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-riau.xml`)
        }else if(provinsi === "kepulauan-riau"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-KepulauanRiau.xml`)
        }else if(provinsi === "jambi"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-Jambi.xml`)
        }else if(provinsi === "lampung"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-Lampung.xml`)
        }else if(provinsi === "bangka-belitung"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-BangkaBelitung.xml`)
        }else if(provinsi === "kalimantan-barat"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-KalimantanBarat.xml`)
        }else if(provinsi === "kalimantan-selatan"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-KalimantanSelatan.xml`)
        }else if(provinsi === "kalimantan-tengah"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-KalimantanTengah.xml`)
        }else if(provinsi === "kalimantan-timur"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-KalimantanTimur.xml`)
        }else if(provinsi === "kalimantan-utara"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-KalimantanUtara.xml`)
        }else if(provinsi === "bali"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-Bali.xml`)
        }else if(provinsi === "ntt"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-NusaTenggaraTimur.xml`)
        }else if(provinsi === "ntb"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-NusaTenggaraBarat.xml`)
        }else if(provinsi === "gorontalo"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-Gorontalo.xml`)
        }else if(provinsi === "sulawesi-barat"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-SulawesiBarat.xml`)
        }else if(provinsi === "sulawesi-selatan"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-SulawesiSelatan.xml`)
        }else if(provinsi === "sulawesi-tengah"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-SulawesiTengah.xml`)
        }else if(provinsi === "sulawesi-tenggara"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-SulawesiTenggara.xml`)
        }else if(provinsi === "sulawesi-utara"){
            response = await axios.get(`${API_ENDPOINT.LIST_WEATHER}-SulawesiUtara.xml`)
        }

        const parseJson = txml.parse(response.data)
        res.send(parseJson[1].children[0].children)

    } catch (error) {
        console.log(error)
    }
}