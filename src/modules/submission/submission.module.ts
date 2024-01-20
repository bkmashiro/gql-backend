import { Module } from '@nestjs/common';
import { SubmissionService } from './submission.service';
import { SubmissionResolver } from './submission.resolver';

@Module({
  providers: [SubmissionResolver, SubmissionService],
  exports: [SubmissionService],
})
export class SubmissionModule {}
