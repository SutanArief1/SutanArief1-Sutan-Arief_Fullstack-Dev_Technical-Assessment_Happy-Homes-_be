import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    await this.prisma.user.create({
      data: {
        ...createUserDto
      }
    })

    return {
      message: "Created user successfully",
      data: createUserDto
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }
  
  async findLatestUser() {
    try {
      const latestUser = await this.prisma.user.findFirst({
        orderBy: { created_at: 'desc' },
      });
      return latestUser;
    } catch (error) {
      throw new Error('Failed to fetch latest user');
    }
  }

  async remove(id: string) {
    await this.prisma.user.delete({
      where: {
        id
      }
    })

    return {
      message: "Deleted user successfully"
    }
  }
}