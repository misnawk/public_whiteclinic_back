import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './util/setupSwagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 8000;

  setupSwagger(app);

  await app.listen(port);
  console.log(`Server is running on port:${port}!`);
}

bootstrap();
