import axios from "axios";

axios.defaults.baseURL = "https://wft-geo-db.p.rapidapi.com/v1/geo/";
axios.defaults.headers.common = {
    Accept: "application/json",
    'x-rapidapi-key': '1c8bec90d8msh4fe16494e72b79ep16f4c4jsn4f21e6d6fea7',
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
};

export default axios;
