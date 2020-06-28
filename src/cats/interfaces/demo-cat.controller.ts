/*
import { Param, HttpCode, Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
// Standard HTTP request endpoints { @Put(), @Delete(), @Patch(), @Options(), @Head(), @All() } are available
// @HttpCode(204) // Allows specification of code, always 200 if not specified
// @Header('Cache-control', 'none') // Allows specification of custom header response
// @Redirect('https://url.com', 301) // Allows redirection with a specific status code
// return { url: 'newURL.com', statusCode: 302 } // Will overwrite params in Redirect decorator
import { CreateCatDto } from './create-cat.dto';
import { UpdateCatDto } from './update-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';

// Controllers receive requests for the application
// Argument to Controller is the route path prefix, meaning <url>/cats gives this end point
@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    // findAll(@Req() req: Request, @Res() res: Response): string allows use for the express req and res object
    // Method name has no siginificance, it basically is just a method that is called when 
    // a GET request is posted to url end point with <url>/cats

    // A simple endpoint returns a status code of 200 by default
    return 'this action returns all cats';
  }

  @Get(':id')
  // findOne(@Param() params): string {
  // subsequently use params.id to get id from params
  findOne(@Param('id') id): string {
    return `This action gets a cat of id ${id}`;
  }

  @Get('ab*cd') // gets <url>/cats/ab<anything here>cd using * wildcard route
  findABCD() {
    return 'Route uses a wildcard';
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    // send database req to add
    return 'This action adds a new cat';
  }

  @Put(':id')
  update(@Param('id') id:string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a cat of ${id} id`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes cat of ${id} id`;
  }
}
*/

