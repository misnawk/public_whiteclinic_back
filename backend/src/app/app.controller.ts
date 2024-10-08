import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('https://whiteclinic-preview.vercel.app/customers/c_list', 302)
  goHome() {
    console.log('Redirect test');
  }
}
