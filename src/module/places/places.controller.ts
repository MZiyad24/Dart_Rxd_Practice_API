import {
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';

import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(
    private readonly placesService: PlacesService,
  ) {}

  @Get()
  getAllPlaces() {
    return this.placesService.getAllPlaces();
  }

  @Get('restaurants')
  getRestaurants() {
    return this.placesService.getPlacesByType(
      'restaurant',
    );
  }

  @Get('cafes')
  getCafes() {
    return this.placesService.getPlacesByType(
      'cafe',
    );
  }

  @Get('products')
  getAllProducts() {
    return this.placesService.getAllProducts();
  }

  @Get('search')
  searchByProduct(
    @Query('product') product: string,
  ) {
    return this.placesService.searchByProduct(
      product,
    );
  }

  @Get(':id')
  getPlaceById(@Param('id') id: string) {
    return this.placesService.getPlaceById(id);
  }
}