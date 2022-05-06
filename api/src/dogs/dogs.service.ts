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
    const r = this.dogsRepository.create(createDogDto);
    await this.dogsRepository.save(r);
    return r;
  }

  async findAll(take: number, page: number): Promise<Dog[]> {
    const [data, total] = await this.dogsRepository.findAndCount({
      take: take,
      skip: take * page,
      order: { id: 'DESC' },
    });
    return data;
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

  // TODO: create seeds module
  async seeds() {
    const dogs: CreateDogDto[] = [
      {
        breedName: 'Affenpinscher',
        photoUrl: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_5743.jpg',
      },
      {
        breedName: 'Shiba',
        photoUrl: 'https://images.dog.ceo/breeds/shiba/shiba-7.jpg',
      },
      {
        breedName: 'Whippet',
        photoUrl: 'https://images.dog.ceo/breeds/whippet/n02091134_4078.jpg',
      },
      {
        breedName: 'Pug',
        photoUrl: 'https://images.dog.ceo/breeds/pug/IMG_3507.jpg',
      },
      {
        breedName: 'Husky',
        photoUrl: 'https://images.dog.ceo/breeds/husky/n02110185_8600.jpg',
      },
      {
        breedName: 'Husky',
        photoUrl: 'https://images.dog.ceo/breeds/husky/n02110185_10902.jpg',
      },
      {
        breedName: 'Pug',
        photoUrl: 'https://images.dog.ceo/breeds/pug/n02110958_11288.jpg',
      },
      {
        breedName: 'Shiba',
        photoUrl: 'https://images.dog.ceo/breeds/shiba/shiba-19.jpg',
      },
      {
        breedName: 'African',
        photoUrl: 'https://images.dog.ceo/breeds/african/n02116738_2599.jpg',
      },
      {
        breedName: 'Affenpinscher',
        photoUrl: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_12431.jpg',
      },
    ];
    dogs.forEach((d) => this.create(d));
    return { sucess: true };
  }
}
