import { Router } from "express";
import {
  getEmployees,
  getEmployeesById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employee/:id", getEmployeesById);
router.post("/employees", createEmployee);
router.put("/employees/:id", updateEmployee);
router.delete("/employees/:id", deleteEmployee);

export default router;
