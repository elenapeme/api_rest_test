const axios = require("axios");
const urlApi = require("../utils/helpers");

const getToken = async () => {
    let token;
    try {
        const res = await axios.post(`${urlApi.URL_API}/login`, {
            client_id: "axa",
            client_secret: "s3cr3t"
        });
        token = await res.data.token;

        // adds the token as a global variable in all the headers of every call
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } catch (err) {
        console.error(err);
    }
};

exports.getToken = getToken();

