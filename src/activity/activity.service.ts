import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ActivityService {
  constructor(private prisma: PrismaService) {}
  create(createActivityDto: CreateActivityDto) {
    const addActivity = this.prisma.activity.create({
      data: {
        ...createActivityDto
      }
    })

    return addActivity
  }

  findAll() {
    const users = this.prisma.activity.findMany({
      include: {
        project_id: {
          select: {
            project_name: true
          }
        }
      }
    });
    return users;
  }

  async findOne(id: string) {
    return await this.prisma.activity.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: string, updateActivityDto: UpdateActivityDto) {
    const updateActivity = await this.prisma.activity.update({
      where: {
        id
      },
      data: {
        ...updateActivityDto
      }
    })

    return updateActivity
  }

  async remove(id: string) {
    await this.prisma.activity.delete({
      where: {
        id
      }
    })
    
    return `This action removes a #${id} activity`;
  }
}
