import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {TokenStorageService} from '../auth/token-storage.service';
import {Router} from '@angular/router';
import {ProductService} from '../products.service';
import {BasketServiceService} from '../basket-service';
import {CardsStorageService} from '../auth/card-storage.service';
import {UserInfoService} from '../user-info-service';
import {CardsPayStorageService} from '../auth/card-pay-storage.service';
import {BasketInfo} from '../basket-info';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  form: any = {};
  amountToPay: any;
  items: BasketInfo[];

  constructor(private authService: AuthService, private token: TokenStorageService,
              private router: Router, private prodService: ProductService,
              private basketService: BasketServiceService, private  cardStorage: CardsStorageService,
              private userInfo: UserInfoService, private  payStorage: CardsPayStorageService) { }

  ngOnInit() {
    this.amountToPay = this.payStorage.getAmount();
    this.items = this.payStorage.getOrder();
  }
  onSubmit() {
    console.log('send to api ', this.items);
    this.items.forEach(value => {
      this.basketService.addBasket(value).subscribe(
        data => {
          console.log(data);
      },
      error => {
          console.log(error);
      }
      );
    });
    this.cardStorage.delete();
    this.payStorage.clear();
    this.router.navigateByUrl('home');
  }

}
