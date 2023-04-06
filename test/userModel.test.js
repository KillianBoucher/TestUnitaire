const User = require('../models/userModel');
const chai = require('chai');
const expect = chai.expect;

describe('User Model', () => {
    it('should create a new User', (done) => {
        const userData = {
            email: 'test@example.com',
            password: 'testpassword'
        };
        
        const newUser = new User(userData);

        newUser.save((err, user) => {
            expect(err).to.be.null;
            expect(user.email).to.equal(userData.email);
            expect(user.password).to.equal(userData.password);
            done();
        });
    });
});
