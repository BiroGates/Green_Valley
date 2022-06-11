import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function listarTodosOsProdutos() {
    const resp = await api.get('/produto');
    return resp.data;
}

export async function buscarPorNome(nome) {
    const resp = await api.get(`/produto/q?nome=${nome}`);
    return resp.data;
}