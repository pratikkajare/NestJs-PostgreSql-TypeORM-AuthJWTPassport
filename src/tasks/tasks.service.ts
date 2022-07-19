import { Injectable } from '@nestjs/common';
import { TASK, TaskStatus } from './task.model';
import { v1 as uuid } from 'uuid';

@Injectable()
// main idea of a provider is that it can be injected as a dependency;
//  this means objects can create various relationships with each other
export class TasksService {
  private tasks: TASK[] = [];

  //want to define in controllers
  getAllTasks(): TASK[] {
    return this.tasks;
  }

  //want to define in controllers
  createTask(title: string, description: string) {
    const task: TASK = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
