import { Controller, Get , Render, UseGuards, Res} from '@nestjs/common';
import { HomeService } from './home.service';
import { CreateHomeDto } from './dto/create-home.dto';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/login/jwt-auth.guard';

@Controller('home')

export class HomeController {
  constructor(private readonly homeService: HomeService) {}



  @UseGuards(JwtAuthGuard)
  @Get()
  @Render('home')
  getProtectedData(@Res() res: Response) {
    const data = { message: "Acesso permitido!" };
  return res.status(200).json( data); 
  }


}
