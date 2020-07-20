const Clients = require("../services/clientsApi");
const Policies = require("../services/policiesApi");

exports.clients_list = (async (req, res) => {
    try {
        const clientsList = await Clients.getClients;
        const policiesList = await Policies.getPolicies;

        //added policies in each client
        for (const client of clientsList) {
            const clientPolicies = policiesList.filter(c=>c.clientId===client.id);
            if(clientPolicies.length)
                client.policies = Object.fromEntries(
                    await clientPolicies.map((
                        {id, clientId, email, ...data}) => [id, data]
                    ));
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
        await res.json(clientsList.slice(page * 10 - 10 , page * 10));
    } catch {
        res.send({
            "code": "401",
            "message": "Unauthorized error"
        })
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
        res.send({
            "code": "400",
            "message": "Bad request"
        })
    }
});

exports.client_policies = (async (req, res) => {
    try {
        const clientsList = await Clients.getClients;
        const policiesList = await Policies.getPolicies;

        //added policies in each client
        for (const client of clientsList) {
            const clientPolicies = policiesList.filter(c=>c.clientId===client.id);
            if(clientPolicies.length)
                client.policies = Object.fromEntries(
                    await clientPolicies.map((
                        {id, clientId, email, ...data}) => [id, data]
                    ));
        }

        //find an id in the clients list
        const findClientId = await clientsList.filter((e) => {
            return e.id === req.params.id;
        });
        if (findClientId !== 0) {
            res.json(findClientId)
        } else {
            res.send({
                "code": "404",
                "message": "This id does not exist"
            })
        }
    } catch {
        res.send({
            "code": "400",
            "message": "Bad request"
        })
    }
});