/*
컨트롤러: url을 가져오는 역할
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('movies') // url의 엔트리 포인트
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): string {
    // @Param('id') <- id 파라미터를 원한다고 요청
    // return 'This will return one movie';
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    // return 'This will create a movie';
    return movieData;
  }

  @Post('/:id/actors')
  addActor() {}

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    // return `This will update a movie with the id: ${movieId}`;
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
