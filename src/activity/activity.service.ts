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
    const users = this.prisma.activity.findMany();
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
