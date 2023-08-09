import { PartialType } from '@nestjs/mapped-types';
import { Product } from './product.dto';

export class UpdateProductDto extends PartialType(Product) {
  name?: string;
  brand?: string;
}
