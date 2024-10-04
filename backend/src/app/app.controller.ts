import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    console.log(`server port is opened`);
    return `<h1>Server is running...</h1>`;
  }
}
