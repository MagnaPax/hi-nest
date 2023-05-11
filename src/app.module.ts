import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// @ <- 데코레이터: 클래스에 함수 기능을 추가. 클래스 '위'의 함수. 클래스 '위'에 데코레이션 장식
//               url을 가져오고 함수를 실행. express의 컨트롤러/라우터 역할
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
