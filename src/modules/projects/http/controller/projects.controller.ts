import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { CreateProjectsUseCase } from '../../usecases/create/create_projects.usecase';
import { FindAllProjectsUseCase } from '../../usecases/find_all/find_all_projects.usecase';
import { FindProjectsByUserIdUseCase } from '../../usecases/findProjectsByUserId/find_projects_by_userId.usecase';

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly getAllUseCases: FindAllProjectsUseCase,
    private readonly createUsecases: CreateProjectsUseCase,
    private readonly findProjectsByUserId: FindProjectsByUserIdUseCase,
  ) {}

  @Post()
  public async create(@Body() createProjectDto: CreateProjectDto) {
    return this.createUsecases.execute(createProjectDto);
  }

  @Get()
  public async findAll() {
    return this.getAllUseCases.execute();
  }

  @Get('user/:id')
  public async getProjectsByUserId(@Param('id') id: string) {
    return this.findProjectsByUserId.execute(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    throw new Error('Method not implemented.');
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    throw new Error('Method not implemented.');
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    throw new Error('Method not implemented.');
  }
}
