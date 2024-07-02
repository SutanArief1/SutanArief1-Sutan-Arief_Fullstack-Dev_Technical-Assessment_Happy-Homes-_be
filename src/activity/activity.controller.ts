import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { calculateDuration } from './helper';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  create(@Body() createActivityDto: CreateActivityDto) {
    const duration = calculateDuration(createActivityDto.start_hour, createActivityDto.end_hour);

    createActivityDto.duration = duration

    return this.activityService.create(createActivityDto); 
  }

  @Get()
  findAll() {
    return this.activityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivityDto: UpdateActivityDto) {
    const duration = calculateDuration(updateActivityDto.start_hour, updateActivityDto.end_hour);

    updateActivityDto.duration = duration

    return this.activityService.update(id, updateActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityService.remove(id);
  }
}
