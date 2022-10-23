import { Router } from "express";
const router = Router();
import * as userCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

router.post(
  "/signup",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExisted,
    verifySignup.checkDuplicateUserOrEmail,
  ],
  userCtrl.signUp
);

router.get("/all", userCtrl.getUsers);

router.get("/id/:userId", userCtrl.getUserId);

router.get("/role/:userRol", userCtrl.getUserByRole);

export default router;
