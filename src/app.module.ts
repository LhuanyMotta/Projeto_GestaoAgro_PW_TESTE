import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SobreModule } from './sobre/sobre.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';

import { AnimalModule } from './animal/animal.module';
import { Animal } from './animal/entities/animal.entity';

import { RebanhosModule } from './rebanhos/rebanhos.module';
import { Rebanho } from './rebanhos/entities/rebanho.entity';

import { AlimentacaoModule } from './alimentacao/alimentacao.module';
import { Alimentacao } from './alimentacao/entities/alimentacao.entity';

import { PastagemModule } from './pastagem/pastagem.module';
import { Pastagem } from './pastagem/entities/pastagem.entity';

import { ProducaoModule } from './producao/producao.module';
import { Producao } from './producao/entities/producao.entity';

import { SaudeModule } from './saude/saude.module';
import { Saude } from './saude/entities/saude.entity';

@Module({
  imports: [
    SobreModule,
    LoginModule,
    HomeModule,
    AnimalModule,
    RebanhosModule,
    AlimentacaoModule,
    PastagemModule,
    ProducaoModule,
    SaudeModule, // Módulo de Saúde importado corretamente

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'GestaoAgro',
      entities: [Animal, Rebanho, Alimentacao, Pastagem, Producao, Saude], // Entidade Saude incluída
      synchronize: false, // Mantenha como false em produção
    }),

    TypeOrmModule.forFeature([Animal, Rebanho, Alimentacao, Pastagem, Producao, Saude]), // Entidade Saude incluída
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}