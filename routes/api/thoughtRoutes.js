const router = require("express").Router();
const {
  getThoughts,
  getOneThought,
  updateOneThought,
  deleteThought,
  createThought
} = require("../../controllers/thoughtController");
const {
    createReaction,
    deleteReaction
} = require("../../controllers/reactionController");

// /api/thoughts
router.route("/")
    .get(getThoughts)
    .post(createThought);

// /api/thoughts/:thoughtId
router.route("/:thoughtId")
    .get(getOneThought)
    .put(updateOneThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions")
    .post(createReaction)
    .delete(deleteReaction);

module.exports = router;
