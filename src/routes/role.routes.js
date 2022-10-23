import { Router } from "express";
const router = Router();
import * as roleCtrl from "../controllers/role.controller";

router.get("/all", roleCtrl.getRoles);

export default router;
