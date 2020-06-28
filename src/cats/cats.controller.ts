import { Param, UsePipes, Controller, Get, Post, Body, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { JoiValidationPipe } from './joi-validation.pipe';
import { ValidationPipe } from './validation.pipe';

@Controller('cats')
export class CatsController {

  // Nest will automatically resolve the singleton catsService and pass it
  // to the controller, so we don't have to worry about multiple instances of the service
  constructor(private catsService: CatsService) {}

  @Post()
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  // async create(@Body() createCatDto: CreateCatDto) {
  async create(
    @Body(new ValidationPipe()) createCatDto: CreateCatDto,
  ) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe)id: number): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Get('forbidden')
  // Example of exception filters
  // Default exception thrown is { "statusCode": 500, "message": "Internal server error" }
  async forbiddenPath() {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message',
    }, HttpStatus.FORBIDDEN);
  }
}
