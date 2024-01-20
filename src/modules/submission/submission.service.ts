import { Injectable } from '@nestjs/common';
import { CreateSubmissionInput } from './dto/create-submission.input';
import { UpdateSubmissionInput } from './dto/update-submission.input';

@Injectable()
export class SubmissionService {
  create(createSubmissionInput: CreateSubmissionInput) {
    return 'This action adds a new submission';
  }

  findAll() {
    return `This action returns all submission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} submission`;
  }

  findAllByUserId(userId: number) {
    return [
      {
        id: 1,
        title: 'title1',
        content: 'content1',
        userId: 1,
        createdAt: '2021-08-01T00:00:00.000Z',
        updatedAt: '2021-08-01T00:00:00.000Z',
        deletedAt: null,
      },
      {
        id: 2,
        title: 'title2',
        content: 'content2',
        userId: 1,
        createdAt: '2021-08-01T00:00:00.000Z',
        updatedAt: '2021-08-01T00:00:00.000Z',
        deletedAt: null,
      },
    ];
  }

  update(id: number, updateSubmissionInput: UpdateSubmissionInput) {
    return `This action updates a #${id} submission`;
  }

  remove(id: number) {
    return `This action removes a #${id} submission`;
  }
}
