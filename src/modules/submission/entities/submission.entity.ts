import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Submission {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field(() => String, { description: 'title' })
  title: string;

  @Field(() => String, { description: 'content' })
  content: string;

  @Field(() => Int, { description: 'userId' })
  userId: number;

  @Field(() => String, { description: 'createdAt' })
  createdAt: string;

  @Field(() => String, { description: 'updatedAt' })
  updatedAt: string;

  @Field(() => String, { description: 'deletedAt' })
  deletedAt: string;
}
