import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;
  let productService: ProductsService;
  const mockProduct = [
    { id: 0, name: 'TV', brand: 'sony' },
    { id: 1, name: 'Radio', brand: 'merci' },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    productService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return products', () => {
    jest.spyOn(productService, 'getProducts').mockReturnValue(mockProduct);
    expect(controller.getProducts('sony')).toEqual(mockProduct);
  });
});
