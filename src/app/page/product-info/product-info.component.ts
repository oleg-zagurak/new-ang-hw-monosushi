import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product';
import { OrdersService } from 'src/app/shared/services/orders/orders.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent {
  public product!: IProduct;
  constructor(private ActivatedRoute: ActivatedRoute,
    private orders: OrdersService) { }
  ngOnInit(): void {
    const subscription = this.ActivatedRoute.data.subscribe({
      next: ({product}) => {
        this.product = product;
      },
      error: e => {
        console.error(e);
      },
      complete: () => {
        subscription.unsubscribe();
      }
    });
  }

  setAmount(sign: boolean): void{
    if(sign){
      ++this.product.count;
    } else if(!sign && this.product.count > 1) {
      --this.product.count;
    }
  }

  addOrder(): void{
    this.orders.add(this.product);
  }
}