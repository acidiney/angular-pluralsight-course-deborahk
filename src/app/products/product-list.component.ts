import { Component, OnInit } from '@angular/core'
import { IProduct } from './product'

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'ProductListComponent';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  _listFilter: string = ''
  get listFilter () : string {
    return this._listFilter
  }

  set listFilter (value: string) {
    this._listFilter = value

    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products
  }

  products: IProduct[] = [
  {
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2019",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "https://images.unsplash.com/photo-1593642634627-6fdaf35209f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2019",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "https://images.unsplash.com/photo-1593642634627-6fdaf35209f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }];

  filteredProducts: IProduct[];

  toogleImage () :void {
    this.showImage = !this.showImage
  }

  performFilter (filter: string) : IProduct[] {
    const filterLowercase = filter.toLocaleLowerCase()
      return this.products.filter((item) => {
        return item.productName.toLocaleLowerCase().includes(filterLowercase)
    })
  }

  ngOnInit () {
    this.filteredProducts = this.products
  }
}