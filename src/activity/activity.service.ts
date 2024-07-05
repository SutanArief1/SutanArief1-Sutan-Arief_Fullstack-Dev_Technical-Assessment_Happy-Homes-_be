import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ActivityService {
  constructor(private prisma: PrismaService) { }
  async create(createActivityDto: CreateActivityDto) {
    try {
      const projectExist = await this.prisma.project.findUnique({
        where: {
          id: createActivityDto.projectId
        }
      })

      if (!projectExist) {
        throw new Error('Project not found')
      }

      const addActivity = await this.prisma.activity.create({
        data: {
          ...createActivityDto
        }
      })

      return addActivity
    } catch (error) {
      throw new Error(`Failed to create activity: ${error.message}`)
    }
  }

  async findAll() {
    try {
      return await this.prisma.activity.findMany({
        include: {
          project: {
            select: {
              project_name: true
            }
          },
          user: true
        }
      });
    } catch (error) {
      throw new Error(`Failed to get all activity: ${error.message}`)
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.activity.findUnique({
        where: {
          id
        }
      })
    } catch (error) {
      throw new Error(`Failed to get activity: ${error.message}`)
    }
  }

  async update(id: string, updateActivityDto: UpdateActivityDto) {
    try {
      return await this.prisma.activity.update({
        where: {
          id
        },
        data: {
          ...updateActivityDto
        }
      })
    } catch (error) {
      throw new Error(`Failed to update activity: ${error.message}`)
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.activity.delete({
        where: {
          id
        }
      })

      return {
        message: `This action removes a #${id} activity`
      }
    } catch (error) {
      throw new Error(`Failed to remove activity: ${error.message}`)
    }
  }
}
