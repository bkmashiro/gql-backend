import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { SubmissionModule } from '../submission/submission.module';

@Module({
  imports: [SubmissionModule],
  providers: [UserResolver, UserService],
})
export class UserModule {}
