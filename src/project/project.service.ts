import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}
  async create(createProjectDto: CreateProjectDto) {
    try {
      return await this.prisma.project.create({
        data: {
          ...createProjectDto
        }
      })
    } catch (error) {
      throw new Error(`Failed to create project: ${error.message}`)
    }
  }

  findAll() {
    return this.prisma.project.findMany({
      include: {
        Activity: true
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  async remove(id: number) {
    await this.prisma.project.delete({
      where: {
        id
      }
    })

    return { message: `This action removes a #${id} project` }
  }
}
