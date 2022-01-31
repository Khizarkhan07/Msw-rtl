import { LoginValues } from './Login.types';

import axios, { AxiosResponse } from 'axios';

const REQUEST_HEADERS = {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
};

const postRequest = (request: string, body?: any): Promise<AxiosResponse<any>> => {
    return axios.post(request, body, {
        timeout: 90000,
        headers: REQUEST_HEADERS,
    });
};

export const authenticateUser = async (
    body: LoginValues,
) => {
    try {
        const resp = await postRequest('login', {
            email: body.email,
            password: body.password,
        });
        return {
            errors: resp.data.error,
            userId: resp.data.userName,
        };
    } catch (err) {
        throw new Error("Invalid Credentials",
        );
    }
};
