/*
컨트롤러의 역할
url을 가져오고 function을 리턴한다
*/

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // express 의 get라우터 역할
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // url을 가져와서 함수로 매핑. /hello 를 가져와서 sayHello로 매핑
  @Get('/hello')
  sayHello(): string {
    // return 'Hello 안녕하세욧';
    return this.appService.getHi(); // app.service 에서 비즈니스 로직을 가져온다
  }
}
