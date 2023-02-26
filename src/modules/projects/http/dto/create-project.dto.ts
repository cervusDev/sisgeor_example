import { Projects, Status, Team } from '@prisma/client';

export class CreateProjectDto implements Projects {
  id: number;
  team: Team;
  status: Status;
  client: string;
  document: string;
  name: string;
  responsible: string;
  description: string;
  endDate: string;
  startDate: string;
  realEndDate: string;
  realStartDate: string;
  deletedAt: Date;
  updatedAt: Date;
  createdAt: Date;
  UserId: number;
}
