import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product';
import { DbDataService } from 'src/app/shared/services/database/db-data.service';
import { OrdersService } from 'src/app/shared/services/orders/orders.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent {
  public products: IProduct[] = [];
  @Input() homeLocation: boolean = false;
  constructor(private db: DbDataService,
    private orders: OrdersService) { }
  ngOnInit(): void {
    this.db.API = environment.API.products;
    this.getProducts();
  }
  getProducts(): void {
    this.db.getAll<IProduct>().subscribe({
      next: data => {
        this.products = data;
      },
      error: e => {
        console.error(e)
      }
    })
  }

  setAmount(sign: boolean, product: IProduct): void {
    if (sign) {
      ++product.count;
    } else if (!sign && product.count > 1) {
      --product.count;
    }
  }

  addOrder(product: IProduct): void {
    this.orders.add(product);
  }
}
