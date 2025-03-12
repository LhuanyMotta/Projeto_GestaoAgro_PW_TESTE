import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/login.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {

  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async validateUser(NomeUsuario: string, password: string): Promise<any> {
    const user = await this.usersRepository.findOne({ where: { NomeUsuario:NomeUsuario } });
    console.log(user)
    if (user && user.Senha === password) {
      const { Senha, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Usuário ou senha inválidos');
  }

  async login(user: any): Promise<string> {
    const payload = { NomeUsuario: user.NomeUsuario, sub: user.id };
    return this.jwtService.sign(payload);  // Retorna diretamente o token como string
  }
}
