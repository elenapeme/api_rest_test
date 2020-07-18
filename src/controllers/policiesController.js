const { calculateLimitAndOffset, paginate } = require ('paginate-info');
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
    console.log(await policiesList);
    // send the JSON with the pagination applied
    //res.send(await policiesList.slice(page * 10 - 10 , page * 10));
    res.send(await policiesList);
});

exports.policies_id = (async (req, res) => {
    try {
        const policiesList = await Policies.getPolicies;
        const findPoliciesId = await policiesList.filter((e) => {
            return e.id === req.params.id;
        });

        if (findPoliciesId.length !== 0 ) {
            res.end(await JSON.stringify(findPoliciesId));
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

exports.policies_list2 = (async (req, res,  next) => {
    try {

    } catch {

    }
});