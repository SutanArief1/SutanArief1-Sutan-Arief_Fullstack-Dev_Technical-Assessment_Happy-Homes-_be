import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityDto } from './create-activity.dto';

export class UpdateActivityDto extends PartialType(CreateActivityDto) {
  start_date?: Date;
  end_date?: Date;
  duration?: string;
  title_activity?: string;
  projectId?: number;
}
