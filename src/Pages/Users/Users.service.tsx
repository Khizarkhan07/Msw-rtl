import axios, { AxiosResponse } from 'axios';

const REQUEST_HEADERS = {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
};

const getRequest = (request: string): Promise<AxiosResponse<any>> => {
    return axios.get(request, {
        timeout: 90000,
        headers: REQUEST_HEADERS,
    });
};

export const getUsers = async () => {
    try {
        
        const resp = await getRequest('https://61fac9e687801d0017a2c289.mockapi.io/api/users')
        return {
            users: resp.data
        }
    }catch (err) {
        throw new Error("Invalid API CALL",
        );
    }
} 
