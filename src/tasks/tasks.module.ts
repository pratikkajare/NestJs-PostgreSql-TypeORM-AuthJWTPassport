import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

//module decorator provides meatdata that nest makes use to organize app stucture
@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
