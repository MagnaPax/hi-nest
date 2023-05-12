/*
DTO : Data Transfer Object(데이터 전송 객체)
service의 updateData, movieData에게 타입을 부여하기 위함
*/

// 유효성 검사
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// 타입 만들기
// 사람들이 보낼 수 있는것, 보냈으면 하는 것
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

/*
// title, year, genres 중에 한두개만 수정하고 싶을 수 있기 때문에 필수가 아니게끔 ?사용해서 옵셔널로.
export class UpdateMovieDto {
    @IsString()
    readonly title?: string;
  
    @IsNumber()
    readonly year?: number;
  
    @IsString({ each: true })
    readonly genres?: string[];
  }
*/
