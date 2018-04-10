import axios from 'axios';
import config from '../config/config';


const getSongs = () => {
    return axios.get(`${config.baseUrl}/https://api.deezer.com/search?q=a`);

};

const getMoreSongs = (url) => {
    return axios.get(`${config.baseUrl}/${url.url}`);

};

const searchSong = (value) => {
    return axios.get(`${config.baseUrl}/https://api.deezer.com/search?q=${value.title}`);

};


export {getSongs, getMoreSongs, searchSong};