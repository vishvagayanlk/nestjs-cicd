import { Body, Controller, Get, Param, Query, Post, Put } from '@nestjs/common';
import { createProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { Product } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  @Get()
  getProducts(@Query('brand') brand: string): Array<Product> | Product {
    return this.productService.getProducts(brand);
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createProduct(@Body() createProduct: createProductDto) {
    this.productService.setProduct(createProduct);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProduct: UpdateProductDto,
  ) {
    const formattedId = Number(id);
    this.productService.updateProductByID(formattedId, updateProduct);
    return this.productService.getProductById(formattedId);
  }
}
