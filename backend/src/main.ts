import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './util/setupSwagger';
import { HttpErrorFilter } from './util/HttpErrorFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = 8000;

  app.enableCors({ origin: true, credentials: true });
  app.useGlobalFilters(new HttpErrorFilter());

  setupSwagger(app);

  await app.listen(port);
  console.log(`Server is running on port:${port}!`);
}

bootstrap();
