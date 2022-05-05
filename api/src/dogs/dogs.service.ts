import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { Dog } from './entities/dog.entity';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}

  async create(createDogDto: CreateDogDto): Promise<Dog> {
    const tr = this.dogsRepository.create(createDogDto);
    await this.dogsRepository.save(tr);
    return tr;
  }

  findAll() {
    return this.dogsRepository.find();
  }

  findOne(id: number) {
    return this.dogsRepository.findOne(id);
  }

  update(id: number, updateDogDto: UpdateDogDto) {
    throw new NotImplementedException();
  }

  async remove(id: number) {
    await this.dogsRepository.delete(id);
  }
}
