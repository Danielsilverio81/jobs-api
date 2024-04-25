import { Candidate } from "./Candidate";
import { Company } from "./Company";
import { Job } from "./Job";

Candidate.belongsToMany(Job, { through: "job_candidates" });
Company.hasMany(Job);
Job.belongsTo(Company);
Job.belongsToMany(Candidate, { through: "job_candidates" });

export { Candidate, Company, Job };
