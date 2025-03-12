import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { authController } from './login.controller';

@Module({
  controllers: [authController],
  providers: [LoginService],
})
export class LoginModule {}
