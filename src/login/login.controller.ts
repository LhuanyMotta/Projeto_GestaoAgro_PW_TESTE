import { Controller, Get, Post, Body, UnauthorizedException, Render, Res } from '@nestjs/common';
import { LoginService } from './login.service';
import { Response } from 'express';
import { CreateLoginDto } from './dto/create-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  @Render('index')
  gethome(){

  }

  @Post()
  async login(@Body() body: any, @Res() res: Response) {
    const { NomeUsuario, Senha } = body;

    // Validação manual
    if (!NomeUsuario || typeof NomeUsuario !== 'string') {
      return res.status(400).json({ message: 'NomeUsuario deve ser uma string válida' });
    }

    if (!Senha || typeof Senha !== 'string') {
      return res.status(400).json({ message: 'Senha deve ser uma string válida' });
    }

    // Validação do usuário
    const user = await this.loginService.validateUser(NomeUsuario, Senha);
    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Geração do token
    const token = await this.loginService.login(user);

    // Retorna apenas o token como string
    return res.status(200).json({ token });
  }
}
