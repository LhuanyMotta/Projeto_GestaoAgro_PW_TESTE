import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/login/entities/login.entity';
import { JwtModule } from '@nestjs/jwt';
import { LoginModule } from 'src/login/login.module';

@Module({
  imports: [
   LoginModule
  ], 
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
