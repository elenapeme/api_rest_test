const jwt = require('jsonwebtoken');

// clients extracted
const Clients = require("../services/clientsApi");

// Token Secret
const token = require("../utils/config");

// get users from 3rd API
let users = [];
const getUsers = async() => {
    const clientsLists = await Clients.getClients;
    await clientsLists.map((e) => {
        return users.push({
            "username": e.name,
            "password": `password_${e.name}`,
            "role": e.role
        });
    });

};

// login user
exports.auth_user = (async (req, res) => {
    try {
        await getUsers();
        console.log(users);
        // Read username and password from request body
        const username = await req.body.username;
        const password = await req.body.password;

        // Filter user from the users array by username and password
        const user = users.find(u => { return u.username === username && u.password === password });

        if (await user) {
            // Generate an access token
            const accessToken = await jwt.sign({ username: user.username,  role: user.role }, token.SECRET_TOKEN, { expiresIn: '1 day' });
            console.log("token", accessToken);
            await res.json(accessToken);

        } else {
            res.send('Username or password incorrect');
        }

    } catch (err) {
        res.send(err);
    }
});