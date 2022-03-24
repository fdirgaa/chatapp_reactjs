const { register, login } = require("../controllers/usersController");

const router = require("express").Router()

router.post("/register", register)
router.post("/login", login)

router.get('/register', (req, res) => {
  res.json({message: "Sukses"})
})

module.exports = router