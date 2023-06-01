import { Project } from '../http/entities/project.entity';
import { Repository } from 'src/common/interfaces/repository';

export abstract class IProjectsRepository extends Repository<Project> {
  public abstract findProjectsByUserId(id: number): Promise<Project[]>;
}
