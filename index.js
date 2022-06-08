import express from 'express'
import cors from 'cors'
import { getWeather } from './controllers/get-weather.js'
import { EQNew , EQBig , EQSmall } from './controllers/get-seismic.js'

const app = express()
app.use(cors({
    origin: '*'
}))

app.get('/', (req,res) => {
    res.send('Halo Ges')
})
app.get('/cuaca/:provinsi', getWeather)
app.get('/gempa-terbaru', EQNew)
app.get('/gempa-besar', EQBig)
app.get('/gempa-kecil', EQSmall)

app.listen(process.env.PORT || 3000 , () => console.log('Server berjalan di port 3000'))