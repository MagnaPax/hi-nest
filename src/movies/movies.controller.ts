/*
컨트롤러의 역할
1. url 매핑
2. 리퀘스트 받기
3. Query, Body 넘기기
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
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies') // url의 엔트리 포인트
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    // return 'This will return all movies';
    return this.moviesService.getAll();
  }

  // 반드시 @Get(':id') <- 얘보다 위에 위치해야 된다. 안그러면 엔트리포인트 이후를 그냥 id로 인식함
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `${searchingYear}년 이후 만들어진 영화 검색중`;
    // http://localhost:7653/movies/search?year=2000
    // 여기에서 year를 리턴함
  }

  @Get(':id')
  getOne(@Param('id') movieId: string): Movie {
    // @Param('id') <- id 파라미터를 원한다고 요청
    // return 'This will return one movie';
    // return `This will return one movie with the id: ${movieId}`;
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    // return 'This will create a movie';
    // return movieData;
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    // return `This will delete a movie with the id: ${movieId}`;
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    // return `This will update a movie with the id: ${movieId}`;
    // return {
    //   updatedMovie: movieId,
    //   ...updateData,
    // };
    return this.moviesService.update(movieId, updateData);
  }
}
