

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Create project
```bash
# 원한다면 './' 현재 디렉토리에 생성
$ nest new [project-name]
```

| File          | Description                |
|---------------|----------------------------|
| .eslintrc.js  | 타입스크립트 가이드라인 제시, 문법 오류시 알림 |
| .prettierrc   | 코드 형식을 맞추는 포맷터 역할          |
| nest-cli.json | nestjs 프로젝트 자체에 필요한 설정     |
| src           | 소스코드 디렉토리                  |


## Nest JS Module?
@Module() Decorator 가 달린 클래스 \
애플리케이션에는 반드시 루트 모듈 `AppModule`(root)을 가져야합니다.

### 특징
- 모듈은 기본적으로 Singleton.
- 공통 모듈을 생성하고 다른 모듈에 적용하는 것도 가능.
- 같은 도메인에 해당하는 것들을 같은 모듈 디렉토리 내에 넣어 사용 \
ex) BoardController - BoardService - BoardRepository 를 BoardModule 내에 넣음


### 모듈 생성
```bash
# g: Generate
$ nest g module [module-name]
```


## Layered Architecture

### Controller
`@Controller` 어노테이션의 인자를 통해 경로를 받음
```typescript
@Controller('board')
export class BoardController {}
```

#### Controller 생성
```bash
# [CLI 입력시 실행 절차]
# 1. 내부적으로 <controller-name> 폴더를 먼저 찾는다
# 2. 해당 디렉토리에 controller 파일을 생성한다.
# 3. 해당 디렉토리에 module 파일을 찾는다.
# 4. module 파일 내 @Module() 어노테이션에 새로 생성한 Controller 를 등록한다.
$ nest g controller [controller-name]
```

#### Handler
Controller 내에서 요청에 매핑된 하나 하나의 메소드를 '핸들러' 라고 부름.
```typescript
// board.controller.ts
@Get('/')
getHello(): string {
    return this.boardService.getHello();
}
```

### Provider
Spring 에서 Concrete Component 에 해당한다. \
Provider 는 다른 Component 로의 DI 를 지원한다.

### Service
비즈니스 로직을 담당한다.\
`@Injectable` Decorator 로 감싸져서 모듈에 제공된다. \
이 서비스 인스턴스는 애플리케이션 전체에서 사용할 수 있게된다.

#### Service 생성
```bash
$ nest g service [service-name]
```


```typescript
// board.service.ts
@Injectable()
export class BoardService {}
```


## DTO
**NestJS 는 `class` 를 Data Transfer Object (DTO) 로 사용하는 것을 권장한다.** \
`interface` 로도 DTO 를 구성할 수는 있다. \
class 로 DTO 생성을 권장하는 이유는 런타임에 동작하는 파이프와 같은 기능을 사용하기 위해서다.

## VO
DTO 와 마찬가지로 class , interface 로 모두 정의할 수 있다. \
요청 스팩이 자주 변하는게 아니라면 왠만하면 class 로 정의하자.

## DTO vs VO 분리
DTO 는 Service Layer -> Controller Layer 로 전달할 때 사용하고\
VO 는 Controller Layer -> Service Layer 에만 사용한다.

> 이렇게 용도를 분리하여 사용하는 것은 \
**레이어간 데이터 전달시 포맷과 데이터 전달 방향을 명확하게 제한하는 효과가 있다.**

## Class 정의 팁
Access Modifier (`public`, `proete`, `private`, `readOnly`) 를 생성자 내에 지정시 \
클래스의 property 로 자동 생성된다. 

#### CreateBoardDto.ts
```typescript
export class CreateBoardDto {
    constructor(readonly id: bigint, title: string, description: string, public status: keyof typeof BoardStatus) {

    }
}
```
**✒️ 좋은 기능이지만, property 가 많은 경우 권장하지 않는다.**

> 클래스가 가진 property 목록을 클래스 이름 바로 밑에 명시해주는 것이 좋다. \
> 한 눈에 파악하기 편하기 때문이다.

#### BoardDto.test.ts
```typescript
import {CreateBoardDto} from "./CreateBoard.dto";
import {BoardStatus} from "../BoardStatus.model";

const boardDto = new CreateBoardDto(BigInt(5), "khazix", "leag", BoardStatus.PRIVATE);
boardDto.id; // ✔️ readonly 키워드 때문에 접근 가능
boardDto.title // ⚠️ 접근 지정자를 명시하지 않아 불가능.
```

## Pipe
`@Injectable` decorator 로 주석이 달린 클래스 \
data transformation, data validation 용도로 사용 \
Middleware 와 Controller 사이에 작동한다.

### How to use pipe?

#### Global level pipes
클라이언트로부터 전달 받는 모든 요청에 적용 \
`main.ts` 의 앱에 주입해주면 된다.
```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(GlobalPipes); // 글로벌 파이프 적용
  await app.listen(3000);
}
```
#### Handler level pipes
핸들러 레벨에서 `@Usepipes()` 데코레이터를 적용 \
모든 파라미터에 적용됨.
```typescript
@UsePipes(pipe)
@Post()
// (title, description) 모두 적용됨
createBoard(
    @Body('title') title,
    @Body('description') description
) {}
```

#### Parameter level pipes
특정 파라미터에게만 적용되는 파이프
```typescript
@UsePipes(pipe)
@Post()
// title 에만 파이프 적용
createBoard(
    @Body('title', ParameterPipe) title,
    @Body('description') description
) {}
```

#### Built-in pipes
Nest.js 에서 기본 제공하는 파이프. \
간단히 설치할 수 있다.
```bash
$ yarn add class-validator class-transformer
```
- ValidationPipe
- ParseIntPipe
- ParseBoolPipe
- ParseArrayPipe
- ParseUUIDPipe
- DefaultValuePipe

---

## Logging
Nest.js 에서는 기본 Logger 를 제공.

### 종류
- Log: 중요 정보 로그
- Warning: 치명적이지 않은 처리되지 않은 문제 로그
- Error: 치명적인 문제 로그
- Debug: 개발자용 디버깅 로그
- Verbose: 애플리케이션 운영 로그



## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
