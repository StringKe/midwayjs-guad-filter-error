import { Controller, Get, UseGuard } from '@midwayjs/decorator';
import { TestGuard } from '../guard/test.guard';

@Controller('/')
export class HomeController {
  @Get('/')
  @UseGuard(TestGuard)
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }
}
