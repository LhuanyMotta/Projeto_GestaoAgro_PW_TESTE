import { Controller, Get,Render } from '@nestjs/common';
import { SobreService } from './sobre.service';


@Controller('sobre')
export class SobreController {
  constructor(private readonly sobreService: SobreService) {}

  @Get()
  @Render('sobre')
  getSobre(): any {
    // Supondo que findAll() retorna um array ou objeto, ou você pode adaptar isso
    
    // Retorne um objeto com as variáveis que você quer passar para o template
    return this.sobreService.findAll();;  // Aqui você passa um objeto com a chave `message`
  }
}
