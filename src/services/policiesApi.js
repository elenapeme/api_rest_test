const axios = require("axios");
const urlApi = require("../utils/config");
const loginApi = require("./loginApi");


const getPolicies = async () => {
    try {
        await loginApi.getToken;
        const res = await axios.get(`${urlApi.URL_API}/policies`);
        const data = await res.data;
        return data;
    } catch (err) {
        console.error(err);
    }
};


exports.getPolicies = getPolicies();
