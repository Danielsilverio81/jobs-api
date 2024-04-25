import { Request, Response } from "express";
import { Company } from "../models";
import { CompanyInstance } from "../models/Company";

export const companiesController = {
  index: async (req: Request, res: Response) => {
    try {
      const companies = await Company.findAll();
      return res.status(201).json(companies);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },
  save: async (req: Request, res: Response) => {
    const { name, bio, website, email } = req.body;
    try {
      const companies = await Company.create({
        name,
        bio,
        website,
        email,
      });

      return res.status(201).json(companies);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },
  show: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      if (id) {
        const company = await Company.findByPk(id, { include: "jobs" });
        return res.status(201).json(company);
      } else {
        console.error("Error id not found");
      }
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, bio, website, email } = req.body;
    try {
      const [affectedRows, companies] = await Company.update<CompanyInstance>(
        {
          name,
          bio,
          website,
          email,
        },
        {
          where: { id },
          returning: true,
        }
      );

      return res.json(companies[0]);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await Company.destroy({ where: { id: id } });
      res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },
};
