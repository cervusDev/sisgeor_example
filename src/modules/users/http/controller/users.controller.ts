import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Controller,
} from '@nestjs/common';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { CreateUserDto } from '../dto/create-users.dto';
import { UpdateUserDto } from '../dto/update-users.dto';
import { isRole, Role } from 'src/common/decorators/isAdmin.decorator';
import { CreateUsersUseCase } from '../../usecases/create/create_users.usecase';
import { FindAllUsersUseCase } from '../../usecases/find_all/find_all_users.usecase';
import { FindUserByEmailUseCase } from '../../usecases/find_by_email/find_by_email.usecase';

@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
  constructor(
    private readonly findAllUsecases: FindAllUsersUseCase,
    private readonly createUsersUsecases: CreateUsersUseCase,
    private readonly findUserByEmailUsecases: FindUserByEmailUseCase,
  ) {}

  @Post()
  public async create(@isRole() role: Role, @Body() input: CreateUserDto) {
    return this.createUsersUsecases.execute({ input, role });
  }

  @Get()
  public async findAll() {
    return this.findAllUsecases.execute();
  }

  @Get('find-by-email')
  findByEmail(@Body() email: string) {
    return this.findUserByEmailUsecases.execute({ email });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    throw new Error('Method not implemented.');
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateUserDto) {
    throw new Error('Method not implemented.');
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    throw new Error('Method not implemented.');
  }
}
