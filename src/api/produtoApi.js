import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export default async function listarTodosOsProdutos() {
    try{
        const resp = await api.get('/produto');
        return resp.data;

    }catch(error) {
        return error.message;
    }
}