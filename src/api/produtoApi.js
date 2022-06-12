import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export async function listarTodosOsProdutos() {
    const resposta = await api.get('/produto');
    return resposta.data;
}

export async function buscarPorNome(nome) {
    const resposta = await api.get(`/produto/q?nome=${nome}`);
    return resposta.data;
}

export async function enviarProduto(nome, preco, descricao, categoria, funcionario) {
    const resposta = await api.post(`/produto`, {
        nome: nome,
        preco: preco,
        categoria: categoria,
        descricao: descricao,
        funcionario: funcionario
    }); 
    return resposta.data;
}

export async function alterarProduto(nome, preco, descricao, categoria, id) {
    const resposta = await api.put(`/produto/${id}`, {
        nome: nome,
        preco: preco,
        categoria: categoria,
        descricao: descricao
    });
    return resposta.data;
}

export async function enviarImagem(imagem, id) {
    const formData = new FormData();
    formData.append('imagem', imagem);
    const resposta = await api.put(`/produto/${id}/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    
    return resposta.status;
}

export async function pegarImagem(imagem) {
    console.log(`${api.getUri()}/${imagem}`);
    return `${api.getUri()}/${imagem}`
}