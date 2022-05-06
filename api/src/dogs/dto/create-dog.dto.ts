import { IsNotEmpty } from 'class-validator';

export class CreateDogDto {
  @IsNotEmpty()
  breedName: string;

  @IsNotEmpty()
  photoUrl: string;
}
