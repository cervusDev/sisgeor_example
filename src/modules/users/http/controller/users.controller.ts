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
import { CreateUsersUseCase } from '../../usecases/create/create_users.usecase';
import { FindAllUsersUseCase } from '../../usecases/find_all/find_all_users.usecase';
import { FindUserByEmailUseCase } from '../../usecases/find_by_email/find_by_email.usecase';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { isAdmin } from 'src/common/decorators/isAdmin.decorator';

@Controller('users')
export class UsersController {
  constructor(
    private readonly findAllUsecases: FindAllUsersUseCase,
    private readonly findUserByEmailUsecases: FindUserByEmailUseCase,
    private readonly createUsersUsecases: CreateUsersUseCase,
  ) {}

  @UseGuards(JwtGuard)
  @Post()
  public async create(
    @isAdmin() isAdmin: boolean,
    @Body() input: CreateUserDto,
  ) {
    return this.createUsersUsecases.execute({ input, isAdmin });
  }

  @UseGuards(JwtGuard)
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
