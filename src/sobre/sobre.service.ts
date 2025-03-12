import { Injectable } from '@nestjs/common';

@Injectable()
export class SobreService {
  findAll() {
    return {message:`This action returns all sobre`};
  }
}
