import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  userMap = new Map<number, User>();

  constructor() {
    this.userMap.set(1, {
      id: 1,
      name: 'user1',
      email: 'a@yuzhes.com',
      password: 'password1',
      submissions: []
    });
  }

  create(createUserInput: CreateUserInput) {
    const id = this.userMap.size + 1;
    const user = { ...createUserInput, id, name: createUserInput.username, submissions: [] };
    this.userMap.set(id, user);
    return user;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return this.userMap.get(id);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
