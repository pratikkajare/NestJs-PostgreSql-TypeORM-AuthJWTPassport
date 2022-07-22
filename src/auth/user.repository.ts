import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User) //Entity>
export class UserRepository extends Repository<User> {}
