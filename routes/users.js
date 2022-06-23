const router = require("express").Router();
const { signUp, logIn, getUser } = require("../controllers/userController");
const asyncMiddleware = require("../middleware/async");
const { authToken } = require("../middleware/auth");
router.get(
  "/",
  authToken,
  asyncMiddleware(async (req, res) => {
    res.send(await getUser(req._id))
  })
);

router.post(
  "/signup",
  asyncMiddleware(async (req, res) => {
    res.send(await signUp(req.body))
  })
)

router.post(
  "/login",
  asyncMiddleware(async (req, res) => {
    res.send(await logIn(req.body))
  })
)



module.exports = router;