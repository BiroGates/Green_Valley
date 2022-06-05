import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export default class Api{
    async getProducts(){
        let resp = await api.get('/produto');
        console.log(resp.data);
        return resp.data;
    }

    async addProducts(data){
        let resp = await api.post('/produto', data);
        console.log('Adicionado com sucesso!');
    }

    async deleteProducts(id){
        let resp = await api.delete(`/produto/${id}`)
        console.log('Deletado com sucesso!');
    }
}