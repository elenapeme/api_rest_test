const urlApi = require("../src/utils/config");
const mocha = require("mocha");
const describe = mocha.describe;
const it = mocha.it;
const chai = require("chai");
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

let token;
describe('API main endpoints', () => {
    it('should give you the token ', (done) => {
        chai.request(urlApi.PATH)
            .post("/login")
            .send({
                "username": "Delores",
                "password": "password_Delores"
            })
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(res).to.be.an("object");
                token = res.body;
                done();
            });

    });
    it('should show you the clients', (done) => {
        chai.request(urlApi.PATH)
            .get("/clients")
            .set("Authorization", `Bearer ${token}`)
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(res).to.be.an("object");
                done()
            });

    });
    it('should show you a specific client data', (done) => {
        chai.request(urlApi.PATH)
            .get("/clients/a0ece5db-cd14-4f21-812f-966633e7be86/")
            .set("Authorization", `Bearer ${token}`)
            .end(function (err, res){
                expect(res).to.have.status(200);
                expect(res).to.be.an("object");
                done();
            });

    });
    it('should show you the policies of that client', (done) => {
        chai.request(urlApi.PATH)
            .get("/clients/a0ece5db-cd14-4f21-812f-966633e7be86/policies")
            .set("Authorization", `Bearer ${token}`)
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(res).to.be.an("object");
                done();
            });
    });
    it('should show you the policies list', (done) => {
        chai.request(urlApi.PATH)
            .get("/policies")
            .set("Authorization", `Bearer ${token}`)
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(res).to.be.an("object");
                done();
            });
    });
    it('should show you the policies of a specific client', (done) => {
        chai.request(urlApi.PATH)
            .get("/policies/a0ece5db-cd14-4f21-812f-966633e7be86/")
            .set("Authorization", `Bearer ${token}`)
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(res).to.be.an("object");
                done();
            });
    });
});

