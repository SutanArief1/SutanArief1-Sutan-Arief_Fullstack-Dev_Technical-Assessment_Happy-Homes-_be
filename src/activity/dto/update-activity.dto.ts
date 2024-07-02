import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityDto } from './create-activity.dto';

export class UpdateActivityDto extends PartialType(CreateActivityDto) {
  start_date: Date;
  end_date: Date;
  start_hour: number;
  end_hour: number;
  title_activity: string;
}
