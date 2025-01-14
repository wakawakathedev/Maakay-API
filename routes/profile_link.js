const express = require("express");
const router = express.Router();
const {
  getAllProfileLink,
  getProfileLink,
  createProfileLink,
  updateProfileLink,
  deleteProfileLink,
} = require("../controllers/profile_link");

router.route("/").get(getAllProfileLink).post(createProfileLink);
router
  .route("/:id")
  .get(getProfileLink)
  .patch(updateProfileLink)
  .delete(deleteProfileLink);

module.exports = router;
