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

export default router;
