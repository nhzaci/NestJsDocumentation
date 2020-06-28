import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable() // Any provider can be annotated with the Injectable decorator
// Services can be generated with nest g service cats
// Services are a type of providers 
// Providers inject dependencies; meaning objects and create relationships with each other
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
