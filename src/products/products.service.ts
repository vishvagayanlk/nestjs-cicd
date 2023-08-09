import { Injectable } from '@nestjs/common';
import { Product } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { createProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  private products: Array<Product> = [
    { id: 0, name: 'TV', brand: 'sony' },
    { id: 1, name: 'Radio', brand: 'merci' },
  ];

  getProducts(brand?: string): Array<Product> | Product {
    if (brand) {
      return this.products.find((product) => product.brand === brand);
    }
    return this.products;
  }
  getProductById(id: number): Product {
    console.log('id incoming', id);
    return this.products.find((product) => product.id === id);
  }
  updateProductByID(id: number, update: UpdateProductDto) {
    this.products = this.products.map((product) => {
      if (product.id === id) {
        return { ...product, ...update };
      }
      return product;
    });
  }
  setProduct(createProduct: createProductDto) {
    const lastIndex = this.products.length;
    const productWithId = {
      ...createProduct,
      id: lastIndex,
    };
    this.products.push(productWithId);
  }
}
