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
  Query,
} from '@nestjs/common';

@Controller('movies') // url의 엔트리 포인트
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  // 반드시 @Get(':id') <- 얘보다 위에 위치해야 된다. 안그러면 엔트리포인트 이후를 그냥 id로 인식함
  @Get('search')
  search(@Query('year') searchingYear) {
    return `This will return all movies made after: ${searchingYear}`;
    // http://localhost:7653/movies/search?year=2000
    // 여기에서 year를 리턴함
  }

  @Get(':id')
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

  @Post(':id/actors')
  addActor() {}

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    // return `This will update a movie with the id: ${movieId}`;
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
