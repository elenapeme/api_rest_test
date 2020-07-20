const urlApi = require("../src/utils/config");
const mocha = require("mocha");
const describe = mocha.describe;
const it = mocha.it;
const chai = require("chai");
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

let token;
const PATH = "https://localhost/8080/";
describe('API main endpoints', () => {
    it('should give you the token ',  (done) => {
        chai.request(PATH)
            .post('/api/login')
            .send({
                "username": "Delores",
                "password": "password_Delores"
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                token = res.body.token;
                done();
            })

    });
});

