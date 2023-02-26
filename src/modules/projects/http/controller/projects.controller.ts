import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { FindAllProjectsUseCase } from '../../usecases/find_all/find_all_projects.usecase';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly getAllUseCases: FindAllProjectsUseCase) {}

  @Post()
  public async create(@Body() createProjectDto: CreateProjectDto) {
    throw new Error('Method not implemented.');
  }

  @Get()
  findAll() {
    return this.getAllUseCases.execute();
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
