const Policies = require("../services/policiesApi");

exports.policies_list = (async (req, res, next) => {
    
    // pagination
    const policiesList = await Policies.getPolicies;
    const policiesCount = policiesList.length;
    const pageCount = Math.ceil(policiesCount / 10);
    let page = parseInt(req.query.p);
    if (!page) {
        page = 1;
    }
    if (page > pageCount) {
        page = pageCount
    }

    // send the JSON with the pagination applied
    res.send(await policiesList.slice(page * 10 - 10 , page * 10));
});

exports.policies_id = (async (req, res) => {
    try {
        const policiesList = await Policies.getPolicies;

        //find an id in the policies list
        const findPoliciesId = await policiesList.filter((e) => {
            return e.id === req.params.id;
        });

        if (findPoliciesId.length !== 0 ) {
            res.json(findPoliciesId);
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