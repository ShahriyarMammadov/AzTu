const { login } = require("../controllers/authControllers");
const {
  getUserById,
  addedFexriDoktor,
  addedfexriMezun,
  addedQehremanlarimiz,
  addedSabiqRektorlarimiz,
  addedProrektor,
  getFexriDoktorlarimiz,
  getSabiqRektorlarimiz,
  getQehremanlarimiz,
  getProrektorlar,
  getFexriMezunlar,
} = require("../controllers/dataController");
const { checkUser } = require("../middlewares/authMiddleware");

function userRouter(app) {
  // Authentification Routes
  app.post("/login", login);
  app.post("/", checkUser);

  // Date Routes
  // POST
  app.get("/user/:id", getUserById);
  app.post("/added/fexriDoktorlar", addedFexriDoktor);
  app.post("/added/fexriMezunlar", addedfexriMezun);
  app.post("/added/qehremanlarimiz", addedQehremanlarimiz);
  app.post("/added/sabiqRektorlarimiz", addedSabiqRektorlarimiz);
  app.post("/added/prorektor", addedProrektor);

  // GET
  app.get("/fexriDoktorlar", getFexriDoktorlarimiz);
  app.get("/sabiqRektorlarimiz", getSabiqRektorlarimiz);
  app.get("/qehremanlarimiz", getQehremanlarimiz);
  app.get("/prorektorlar", getProrektorlar);
  app.get("/fexriMezunlar", getFexriMezunlar);
}

module.exports = userRouter;
