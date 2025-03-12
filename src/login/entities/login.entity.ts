import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Usuario') // Nome da tabela no banco de dados
export class User {
  findOne(arg0: { where: { NomeUsuario: string; }; }) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  NomeUsuario: string;

  @Column()
  Senha: string;
}