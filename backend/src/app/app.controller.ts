import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    console.log(`server port is opened`);
    return `
    <h1>WhiteClinic Server is running...</h1>
    <h3>Default Router is Routing this Page !</h3>
    <div>WhiteClinic Default Routing Page</div>

    `;
  }
}
