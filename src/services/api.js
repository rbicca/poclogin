import axios from 'axios';

const api = axios.create({
    baseURL: 'http://docsdigitaisauxiliadora.com:8095/api',
    headers: {
        'x-access-token': 'expeliarmus'
    }
});

export default api;