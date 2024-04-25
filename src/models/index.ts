import { Candidate } from "./Candidate";
import { Company } from "./Company";
import { Job } from "./Job";

Company.hasMany(Job);

Job.belongsTo(Company);

export { Candidate, Company, Job };
