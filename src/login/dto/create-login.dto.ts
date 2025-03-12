import { IsString, IsNotEmpty } from 'class-validator';

export class CreateLoginDto {
  @IsString()
  @IsNotEmpty()
  NomeUsuario: string;

  @IsString()
  @IsNotEmpty()
  Senha: string;
}