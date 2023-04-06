const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const expect = chai.expect;

chai.use(chaiHttp);

describe('User Routes', () => {
    describe('POST /user/register', () => {
        it('should register a new user', (done) => {
            const user = {
                email: 'test@example.com',
                password: 'testpassword'
            };

            chai.request(server)
                .post('/user/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.message.should.include(user.email);
                    done();
                });
        });
    });
});