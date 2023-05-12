/*
DTO : Data Transfer Object(데이터 전송 객체)
service의 updateData, movieData에게 타입을 부여하기 위함
*/

// 유효성 검사
import { IsString, IsNumber } from 'class-validator';

// 타입 만들기
// 사람들이 보낼 수 있는것, 보냈으면 하는 것
export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  readonly genres: string[];
}
