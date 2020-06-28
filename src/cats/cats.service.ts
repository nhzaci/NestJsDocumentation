import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

// Services can be generated with nest g service cats
// Services are a type of providers 
// Providers inject dependencies; meaning objects and create relationships with each other
@Injectable() // Any provider can be annotated with the Injectable decorator
export class CatsService {
  private readonly cats: Cat[] = [];
  
  // For optional dependencies, simply declare @Optional in the constructor
  // constructor(@Optional() @Inject(<token>) private dependencyName: Type) {}

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
