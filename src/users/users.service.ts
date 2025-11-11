import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type User = { id: number; username: string; password: string };

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'anas',
      password: bcrypt.hashSync('password', 10),
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(u => u.username === username);
  }

  async createUser(username: string, password: string): Promise<User> {
    const user = {
      id: Date.now(),
      username,
      password: await bcrypt.hash(password, 10),
    };
    this.users.push(user);
    return user;
  }
}
