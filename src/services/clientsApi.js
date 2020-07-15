const axios = require("axios");
const urlApi = require("../utils/helpers");
const loginApi = require("./loginApi");


const clientsApi = async() => {
    try {
        await loginApi.getToken;
        const getClients = async () => {
            try {
                const res = await axios.get(`${urlApi.URL_API}/clients`);
                console.log(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        await getClients();

    } catch (err) {
        console.log(err);
    }
};

exports.getClients = clientsApi();
