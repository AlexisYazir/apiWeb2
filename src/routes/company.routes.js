import { Router } from "express";
import {createCompany,  getCompany, addPolicie, updateMisionVision} from "../controllers/company.controller.js"
import { CompanySchema } from "../schemas/company.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router();

router.post("/company",validateSchema(CompanySchema) , createCompany)
router.post("/add-policie", addPolicie)
router.get("/company", getCompany)
router.post("/update-company", updateMisionVision)


export default router