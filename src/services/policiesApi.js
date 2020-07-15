const axios = require("axios");
const urlApi = require("../utils/helpers");
const loginApi = require("./loginApi");


const policiesApi = async() => {
    try {
        await loginApi.getToken;
        const getPolicies = async () => {
            try {
                const res = await axios.get(`${urlApi.URL_API}/policies`);
                console.log(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        await getPolicies();
    } catch (err) {
        console.log(err);
    }
};

exports.getPolicies = policiesApi();
