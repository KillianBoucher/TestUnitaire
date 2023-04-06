const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Comment Routes', () => {
    let postId = '60c3e6e2d6bfb6001b7f34c9';

    describe('GET /posts/:post_id/comments', () => {
        it('should get all comments for a post', (done) => {
            chai.request(server)
                .get(`/posts/${postId}/comments`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('POST /posts/:post_id/comments', () => {
        it('should create a new comment for a post', (done) => {
            const newComment = {
                name: 'Jane Doe',
                message: 'This is a test comment for the post.'
            };

            chai.request(server)
                .post(`/posts/${postId}/comments`)
                .send(newComment)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.should.have.property('message');
                    res.body.name.should.equal(newComment.name);
                    res.body.message.should.equal(newComment.message);
                    done();
                });
        });
    });
});
