import { GoogleService } from './google.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('google')
export class GoogleController {
  constructor(private GoogleService: GoogleService) {}

  @Get()
  findAllResults(@Query('search') search: string) {
    const results = this.GoogleService.getResults(search);
    return results;
  }
}
