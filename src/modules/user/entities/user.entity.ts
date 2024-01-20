import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Submission } from '@/modules/submission/entities/submission.entity';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'id' })
  id: number;

  @Field(() => String, { description: 'name' })
  name: string;

  @Field(() => String, { description: 'email' })
  email: string;

  @Field(() => String, { description: 'password' })
  password: string;

  @Field(() => [Submission], { description: 'submission', nullable: 'items' })
  submissions: Submission[];
}
