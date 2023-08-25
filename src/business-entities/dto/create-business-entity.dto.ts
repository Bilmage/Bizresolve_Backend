import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateBusinessEntityDto {
  @IsNotEmpty()
  @IsString()
  businessName;

  @IsNotEmpty()
  @IsString()
  businessDescription;

  @IsNotEmpty()
  @IsArray()
  businessOwners: string[];

  @IsNotEmpty()
  @IsString()
  category;

  @IsNotEmpty()
  @IsString()
  location;

  @IsNotEmpty()
  @IsString()
  address;

  @IsNotEmpty()
  @IsString()
  businessStartDate;
}
