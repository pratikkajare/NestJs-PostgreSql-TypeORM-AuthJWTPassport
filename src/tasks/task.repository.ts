import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';

@EntityRepository(Task) //<Entity>
export class TaskRepository extends Repository<Task> {}
