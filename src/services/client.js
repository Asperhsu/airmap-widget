import axios from 'axios';
import { host } from './helpers';

export const siteApi = (group, uuid) => {
    return `${host}/api/site-json/${group}$${uuid}`;
}

export const fetchLatest = (url) => {
    if (!url) {
        return false;
    }

    return axios.get(url)
        .then((response) => {
            return response.data.data;
        }, (error) => {
            return Promise.reject(error);
        });
}