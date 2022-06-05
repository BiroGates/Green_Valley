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

    async createProducts(data){
        let resp = await api.post('/produtos/add', data);
        console.log('Criado com sucesso!');
    }

    async deleteProducts(id){
        let resp = await api.get(`/produtos/delete/${id}`)
        console.log('Deletado com sucesso!');
    }
}