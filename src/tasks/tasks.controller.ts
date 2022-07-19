import { Body, Controller, Get, Post } from '@nestjs/common';
import { TASK } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get() //method (Get,Post,Delete)
  getAllTAsks(): TASK[] {
    return this.tasksService.getAllTasks();
  }

  @Post()

  //Body() is from thunder or postman to take input in json, form-encoded
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): TASK {
    return this.tasksService.createTask(title, description); //saved in TASK by getAllTAsks
  }
}
