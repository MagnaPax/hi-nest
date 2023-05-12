/*
서비스로 보내고 받을 클래스(인터페이스)를 export 한다.
이건 실습을 위한 가짜 db다.
보통은 여기 entities에 실제로 데이터베이스 모델을 만들어야 된다.
*/

export class Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
}
