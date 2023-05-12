/*
서비스의 역할
- 로직을 관리
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    // main의 transform 덕분에 url의 형식인 string 대신에 원래 entity의 id 형식인 number를 쓸 수 있다

    // getOne(id: string): Movie {
    // return this.movies.find((movie) => movie.id === +id);  // +string은 아래 parseInt처럼 string을 int로 바꿈. url이 string이기 때문에 id도 string.
    // return this.movies.find((movie) => movie.id === parseInt(id));
    // const movie = this.movies.find((movie) => movie.id === +id);
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`아이디 번호 ${id} 는 없는 데이터 입니다.`); // 존재하지 않는 아이디의 값을 가져오라고 하면 에러 반환
    }
    return movie;
  }

  deleteOne(id: number) {
    // main의 transform 덕분에 url의 형식인 string 대신에 원래 entity의 id 형식인 number를 쓸 수 있다
    // deleteOne(id: string) {
    // this.movies.filter((movie) => movie.id !== +id); // +string은 string을 int로 바꿈. url이 string이기 때문에 id도 string.
    // return true;
    this.getOne(id);
    // this.movies = this.movies.filter((movie) => movie.id !== +id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData) {
    // main의 transform 덕분에 url의 형식인 string 대신에 원래 entity의 id 형식인 number를 쓸 수 있다

    // update(id: string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id); // 원래 있던것 삭제
    this.movies.push({ ...movie, ...updateData }); // 새로운 movie 생성. 과거의 데이터에 새로운 updateData 더해서 새로운 movie 만듦. 가짜 db를 사용하기 때문에 이런식으로.
  }
}
