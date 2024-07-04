export class CreateActivityDto {
  start_date: Date;
  end_date: Date;
  duration: string;
  title_activity: string;
  projectId: number;
  userId: string;
}