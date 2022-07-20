import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { TASK, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get() //method (Get,Post,Delete)
  // getAllTAsks(): TASK[] {
  //   return this.tasksService.getAllTasks();
  // }  //NOt working with search

  @Get()
  getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): TASK[] {
    if (Object.keys(filterDto).length) {
      return this.tasksService.getTasksWithFilters(filterDto);
    } else {
      return this.tasksService.getAllTasks();
    }
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): TASK {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  //Body() is from thunder or postman to take input in json, form-encoded
  createTask(@Body() createTaskDto: CreateTaskDto): TASK {
    return this.tasksService.createTask(createTaskDto); //saved in TASK by getAllTAsks
  }

  @Delete('/:id')
  //void --cause we dont return any value
  deleteTask(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  ): TASK {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
