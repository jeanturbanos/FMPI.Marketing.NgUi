import { Component, Inject } from '@angular/core';
import { Product } from '../models/products';
import { Http } from '@angular/http';

@Component({
  selector: 'app-prod-listing',
  templateUrl: './prod-listing.component.html',
  styleUrls: ['./prod-listing.component.css']
})
export class ProdListingComponent {
  public products: Product[];
  
  constructor(http: Http, @Inject('BASE_URL') baseUrl: string){
      http.get(baseUrl + 'assets/json/products.json').subscribe(result => {
        this.products = result.json() as Product[];
      }, error => console.error(error));
  }
  
}
