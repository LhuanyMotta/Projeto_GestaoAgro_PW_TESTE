import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { HomeService } from './home.service';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}



  @Get()
  @Render('home')
  findAll() {
 
  }


}
