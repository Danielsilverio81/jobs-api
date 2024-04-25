import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

export interface CompanyInstance extends Model {
    id: number;
    name: string;
    bio: string;
    website: string;
    email: string;
}

export const Company = sequelize.define<CompanyInstance>("companies", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio: DataTypes.TEXT,
    website: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
});
