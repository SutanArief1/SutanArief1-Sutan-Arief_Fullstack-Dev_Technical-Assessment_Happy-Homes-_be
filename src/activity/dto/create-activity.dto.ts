export class CreateActivityDto {
  start_date: Date;
  end_date: Date;
  start_hour: string;
  end_hour: string;
  duration: string;
  title_activity: string;
  projectId: number;
}