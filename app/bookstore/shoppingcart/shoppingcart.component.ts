import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BookDetail } from '../../shared/bookdetail.model';
import { BookStoreService } from '../../shared/bookstore.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: BookStoreService) { }
  shoppingCartList: BookDetail[];
  isShoppingList: boolean;
  ngOnInit() {
    // Just to check if optional object can be passed as Route
    this.route.params.subscribe((params: { shoppingInfo: number }) => {
    });
    // Better to get from Service
    this.shoppingCartList = this.service.getShoppingCartList();
    console.log(this.isShoppingList);
    if (this.shoppingCartList.length > 0) {
      this.isShoppingList = true;
    }
  }

  closePopUp() {
    this.router.navigate(['home/bookstore', { outlets: { 'shopping-cart': null } }]);
  }

}
