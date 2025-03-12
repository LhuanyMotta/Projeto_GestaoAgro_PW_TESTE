import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('auth')
export class authController {
  constructor(private readonly loginService: LoginService) {}

  @Get('login')
  @Render('login')  // Renderiza o template 'login.hbs'
  showLoginForm() {
    const registerScript = this.loginService.getRegisterScript();
   
    return { registerScript };  // Passa o script para o template
  }

  // Captura os dados do formulário de login
  @Post('login')
  login(@Body() body: { email: string, password: string }) {
    console.log('Email:', body.email);
    console.log('Password:', body.password);
    // Aqui você pode validar o email e senha
    return 'Login realizado com sucesso!';
  }

  // Rota para renderizar o formulário de cadastro (parcial)
  @Get('register')
  @Render('register')  // Renderiza o template 'register.hbs'
  registerForm() {
    return {};  // Retorna um objeto vazio, se você precisar passar dados para a view
  }

  // Captura os dados do formulário de cadastro
  @Post('register')
  registerUser(@Body() body: { name: string, email: string, password: string }, ) {
    console.log('Nome:', body.name);
    console.log('Email:', body.email);
    console.log('Password:', body.password);
    
  }
}
