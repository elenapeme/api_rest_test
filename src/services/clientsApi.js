const axios = require("axios");
const urlApi = require("../utils/config");
const loginApi = require("./loginApi");

const getClients = async () => {
    try {
        await loginApi.getToken;
        const res = await axios.get(`${urlApi.URL_API}/clients`);
        const data = await res.data;
        return data;
    } catch (err) {
        console.error(err);
    }
};

exports.getClients = getClients();
