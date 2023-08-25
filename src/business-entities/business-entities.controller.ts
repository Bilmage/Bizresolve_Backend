import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BusinessEntitiesService } from './business-entities.service';
import { CreateBusinessEntityDto } from './dto/create-business-entity.dto';
import { UpdateBusinessEntityDto } from './dto/update-business-entity.dto';
import { AccessTokenGuard } from 'src/auth/guard';
@UseGuards(AccessTokenGuard)
@Controller('business-entities/api/v1')
export class BusinessEntitiesController {
  constructor(
    private readonly businessEntitiesService: BusinessEntitiesService,
  ) {}

  @Post()
  create(@Body() createBusinessEntityDto: CreateBusinessEntityDto) {
    return this.businessEntitiesService.create(createBusinessEntityDto);
  }

  @Get()
  findAll() {
    return this.businessEntitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessEntitiesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBusinessEntityDto: UpdateBusinessEntityDto,
  ) {
    return this.businessEntitiesService.update(id, updateBusinessEntityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessEntitiesService.remove(id);
  }

  @Get('blacklist/all')
  getBlacklist() {
    return this.businessEntitiesService.getBlacklistedBusinesses();
  }
  @Post('blacklist/:id')
  blacklistBusiness(@Param('id') id: string) {
    return this.businessEntitiesService.blacklist(id);
  }
}
