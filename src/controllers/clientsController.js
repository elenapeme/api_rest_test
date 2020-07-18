const Clients = require("../services/clientsApi");

exports.clients_list = (async (req, res) => {
    try {
        const clientsList = await Clients.getClients;

        //added policies in each client
        //TODO
        for (const client of clientsList) {
            const clientPolicies = contracts.filter(c=>c.clientId===client.id);
            if(clientPolicies.length)
                client.contracts = Object.fromEntries(
                    clientPolicies.map(({id, clientId, ...data}) => [id, data]))
        }

        // pagination
        const clientsCount = clientsList.length;
        const pageCount = Math.ceil(clientsCount / 10);
        let page = parseInt(req.query.p);
        if (!page) {
            page = 1;
        }
        if (page > pageCount) {
            page = pageCount
        }

        // send the JSON with the pagination applied
        res.send(await clientsList.slice(page * 10 - 10 , page * 10));
    } catch {
        res.status(500).send()
    }
});

exports.client_id = (async (req, res) => {
    try {
        const clientsList = await Clients.getClients;
        const findClientId = await clientsList.filter((e) => {
            return e.id === req.params.id;
        });
        if (findClientId.length !== 0 ) {
            res.end(await JSON.stringify(findClientId));
        } else {
            res.send({
                "code": "404",
                "message": "This id does not exist"
            })
        }


    } catch (err) {
        res.status(500).send()
    }
});