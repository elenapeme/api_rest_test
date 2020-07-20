const urlApi = require("../src/utils/config");
const mocha = require("mocha");
const describe = mocha.describe;
const it = mocha.it;
const chai = require("chai");
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

// Tests 3rd party API

// variable to save token for the next tests
let token ;

describe('3rd party API functionality',()=>{
    it('should take the token to login', (done) => {
        chai.request(urlApi.URL_API)
            .post('/login')
            .send({
                client_id: "axa",
                client_secret: "s3cr3t"
            })
            .end( function(err,res){
                expect(res).to.have.status(200);
                token = res.body.token;
                console.log(token);
                done();
            });
    });

    it("should get all the clients", (done) => {
        chai.request(urlApi.URL_API)
            .get("/clients")
            .set("Authorization", `Bearer ${token}`)
            .end( function(err,res){
                expect(res).to.have.status(200);
                expect(res.body).to.be.a("array");
                done();
            });
    });

    it("should get all the policies", (done) => {
        chai.request(urlApi.URL_API)
            .get("/policies")
            .set("Authorization", `Bearer ${token}`)
            .end( function(err,res){
                expect(res).to.have.status(200);
                expect(res.body).to.be.a("array");
                done();
            });
    });
});