import { Injectable } from '@nestjs/common';

@Injectable()
// main idea of a provider is that it can be injected as a dependency;
//  this means objects can create various relationships with each other
export class TasksService {}
