import { Router } from "express";
import * as familyController from "../controllers/family.controller.js";

const router = Router();

router.post("/families/add", familyController.createFamily);
router.get("/families/get", familyController.getFamilies);

export default router;