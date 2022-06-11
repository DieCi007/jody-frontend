import { IContactRequest } from './model/ContactRequest';
import axios from 'axios';

function baseUrl() {
    return process.env.REACT_APP_API_BASE_URL;
}

function apikey() {
    return process.env.REACT_APP_API_KEY;
}

export const sendContactRequest = (request: IContactRequest): Promise<void> => {
    return axios.post(baseUrl() + '/v1/contact', request,
        {
            headers: {'x-api-key': apikey() || ''}
        });
}
