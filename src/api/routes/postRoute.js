module.exports = (server) => {

    const postController = require("../controllers/postController");
    const jwtMiddleware = require("../middlewares/jwtmiddleware");

    server.route("/posts") 
    .get(postController.listAllPosts)
    .post(jwtMiddleware.verifyToken, postController.createAPost);

    server.route("/posts/:post_id") // req.params.post_id
    .all(jwtMiddleware.verifyToken)
    .get(postController.getAPost)
    //mise a jour
    .put(postController.updateAPost)
    //supprimer
    .delete(postController.deleteAPost)
}