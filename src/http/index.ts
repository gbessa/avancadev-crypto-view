import axios from 'axios';

const apiKey = 'getFromEnv';


export const cryptoHttp = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data',
    headers: {
        authorization:`Apikey ${apiKey}`
    }
});