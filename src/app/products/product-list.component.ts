import { Component, OnInit } from '@angular/core'
import { IProduct } from './product'
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _productService: ProductService) {}

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

  get products () : IProduct[] {
    return this._productService.getProductList()
  }

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

  onRatingClicked(message) :void {
    this.pageTitle = 'Product List: ' + message
  }

  ngOnInit () {
    this.filteredProducts = this.products
  }
}