import { Request, Response } from "express";
import Employee from "../models/Employee";

export const getEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await Employee.find();
    if (!employees) {
      res.json({message: 'No employees yet'})
    }
    res.json(employees);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
};

export const getEmployeesById = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
};

export const createEmployee = async (req: Request, res: Response) => {
  const employee = new Employee({
    name: req.body.name,
    role: req.body.role,
    department: req.body.department,
    hireDate: req.body.hireDate,
  });

  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedEmployee) {
      res.json(updatedEmployee);
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (employee) {
      res.json({ message: "Employee deleted" });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
  }
};
