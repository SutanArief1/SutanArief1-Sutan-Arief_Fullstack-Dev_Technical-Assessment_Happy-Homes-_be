import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityModule } from './activity/activity.module';
import { ProjectModule } from './project/project.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ActivityModule, ProjectModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
