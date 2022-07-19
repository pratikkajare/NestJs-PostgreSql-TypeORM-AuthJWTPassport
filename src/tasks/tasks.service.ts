import { Injectable } from '@nestjs/common';
import { TASK, TaskStatus } from './task.model';
import { v1 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
// main idea of a provider is that it can be injected as a dependency;
//  this means objects can create various relationships with each other
export class TasksService {
  private tasks: TASK[] = [];

  //want to define in controllers
  getAllTasks(): TASK[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTasksFilterDto): TASK[] {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }
    if (search) {
      tasks = tasks.filter(
        (task) =>
          task.title.includes(search) || task.description.includes(search),
      );
    }
    console.log(tasks);

    return tasks;
  }

  getTaskById(id: string): TASK {
    return this.tasks.find((task) => task.id === id);
  }

  //want to define in controllers
  createTask(createTaskDto: CreateTaskDto) {
    const { title, description } = createTaskDto;
    const task: TASK = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  updateTaskStatus(id: string, status: TaskStatus): TASK {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
