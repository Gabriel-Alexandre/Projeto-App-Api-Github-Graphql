import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com'
})

export default api;

// Arquivo para definir base da minha requisição
// Arquivo para encapsular as informações de requisição