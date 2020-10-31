import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BasketResponse } from './basket-response';
import { BasketInfo } from './basket-info';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class BasketServiceService {

    private addBasketURL = 'http://localhost:8090/panier';
    private getListOfCurrentItem = 'http://localhost:8090/panier/current';

    constructor(private http: HttpClient) {
    }

    addBasket(basket: BasketInfo): Observable<BasketResponse> {
        console.log(basket);
        return this.http.post<BasketResponse>(this.addBasketURL, basket, httpOptions);
    }

    getCurrentCardList(): Observable<BasketResponse[]> {
        return this.http.get<BasketResponse[]>(this.getListOfCurrentItem, httpOptions);
    }

}
