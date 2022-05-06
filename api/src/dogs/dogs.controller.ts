import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) { }

  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    // Forced delay
    await new Promise((r) => setTimeout(r, 1000));
    return this.dogsService.create(createDogDto);
  }

  @Get(':take/:page')
  async findAll(@Param('take') take: number, @Param('page') page: number) {
    // Forced delay
    await new Promise((r) => setTimeout(r, 1000));
    return this.dogsService.findAll(take, page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogsService.update(+id, updateDogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogsService.remove(+id);
  }

  @Post('seeds')
  async seeds() {
    return this.dogsService.seeds();
  }
}
