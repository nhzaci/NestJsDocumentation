import { Request, Response } from 'express';

// For simple middleware, a function may be a more apt application 
// Instead of declaring classes
export function logger(req: Request, res: Response, next: Function) {
  console.log(`Request...`);
  next();
};
