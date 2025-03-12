import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs'
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.use(express.urlencoded({ extended: true }));

  // Ativar validação automática e conversão de tipos
  app.use(express.json()); // Habilita suporte para JSON
  app.use(express.urlencoded({ extended: true }));

  app.use(express.urlencoded({ extended: true }));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname,'..','views','partials'))
  
  await app.listen(process.env.PORT ?? 4000);
  console.log("Aplicação rodando na porta 4000")
  console.log("Acesse http://localhost:4000/home")
}
bootstrap();