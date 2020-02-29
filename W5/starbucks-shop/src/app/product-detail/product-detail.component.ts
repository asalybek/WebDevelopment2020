import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';
import { Product } from '../product'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : Product;
  constructor(
    private route:ActivatedRoute,
    private Service: ShopService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.Service.getProduct(id).subscribe(product => this.product = product);
    
    };

}
