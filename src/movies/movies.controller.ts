import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies') // url의 엔트리 포인트
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): string {
    // return 'This will return one movie';
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Post('/:id/actors')
  addActor() {}

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will update a movie with the id: ${movieId}`;
  }
}
