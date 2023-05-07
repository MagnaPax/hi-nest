/*
서비스의 역할
비지니스 로직을 실행한다
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHi(): string {
    return '안녕, Nest!';
  }
}
