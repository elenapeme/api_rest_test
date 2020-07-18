const urlApi = require("../src/utils/helpers");
const mocha = require("mocha");
const describe = mocha.describe;
const it = mocha.it;
const chai = require("chai");
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('clients endpoint working',()=>{
    it('should give the clients list', (done) => {
        chai.request(urlApi.URL_API)
            .post('/login')
            .send({
                client_id: "axa",
                client_secret: "s3cr3t"
            })
            .end( function(err,res){
                expect(res).to.have.status(200);

                done();
            });
    });

});