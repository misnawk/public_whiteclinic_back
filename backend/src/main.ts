import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './util/setupSwagger';
import { HttpErrorFilter } from './util/HttpErrorFilter';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  config(); // .env 파일 로드

  const app = await NestFactory.create(AppModule);
  const port = 8000;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 정의되지 않은 속성 제거
      forbidNonWhitelisted: true, // DTO에 정의되지 않은 속성이 포함된 경우 에러 발생
      transform: true, // 자동 변환
    }),
  );

  app.enableCors({
    origin: [
      'http://localhost:8000',
      'https://vercel.com/deployproject/whiteclinic-server/CkhnbgnrRERAJDtiiqWf4HNkq59Y',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.useGlobalFilters(new HttpErrorFilter());
  // 전역 파이프 설정

  setupSwagger(app);

  await app.listen(port);
  console.log(`Server is running on port:${port}!`);
}

bootstrap();
