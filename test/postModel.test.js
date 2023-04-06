const Post = require('../models/postModel');
const chai = require('chai');
const expect = chai.expect;

describe('Post Model', () => {
    it('should create a new Post', (done) => {
        const postData = {
            title: 'Test Post',
            content: 'Test Content'
        };
        
        const newPost = new Post(postData);

        newPost.save((err, post) => {
            expect(err).to.be.null;
            expect(post.title).to.equal(postData.title);
            expect(post.content).to.equal(postData.content);
            done();
        });
    });
});
