import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8081'
})

export default class Api{
    async getProducts(){
        let resp = await api.get('/produtos');
        console.log(resp.data);
        return resp.data;
    }
}