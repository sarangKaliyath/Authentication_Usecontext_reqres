import axios from 'axios';

export function Login({ email, password }) {
    
    const config = {
        method: 'POST',
        data: {
            email,
            password
        },
        url: 'https://reqres.in/api/login'
    }
    return axios(config);
}