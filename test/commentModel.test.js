const chai = require('chai');
const should = chai.should();
const Comment = require('../models/commentModel');

describe('Comment Model', () => {
    it('should create a new comment', (done) => {
        const comment = new Comment({
            name: 'John Doe',
            message: 'This is a test comment.',
            post_id: '60c3e6e2d6bfb6001b7f34c9'
        });

        comment.save((err, savedComment) => {
            should.not.exist(err);
            savedComment.name.should.equal('John Doe');
            savedComment.message.should.equal('This is a test comment.');
            savedComment.post_id.should.equal('60c3e6e2d6bfb6001b7f34c9');
            done();
        });
    });
});
