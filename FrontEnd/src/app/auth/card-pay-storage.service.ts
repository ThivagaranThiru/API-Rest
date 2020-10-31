import { Injectable } from '@angular/core';

import { BasketInfo } from '../basket-info';
import { AddressResponse } from '../address-response';

const ORDER = 'ORDER';
const AMOUNT = 'TOTAL';
const ADDRESS = 'ADDRESS';
@Injectable({
    providedIn: 'root'
})

export class CardsPayStorageService {
    private cardes: BasketInfo[] = [];
    constructor() { }

    public storeAmount(num: number) {
        window.sessionStorage.removeItem(AMOUNT);
        window.sessionStorage.setItem(AMOUNT, num.toString());
    }

    public getAmount(): string {
        return window.sessionStorage.getItem(AMOUNT);
    }

    public setOrder(order: BasketInfo[]) {
        this.cardes = order;
        window.sessionStorage.removeItem(ORDER);
        window.sessionStorage.setItem(ORDER, JSON.stringify(this.cardes));
    }

    public getOrder(): BasketInfo[] {
        return JSON.parse(window.sessionStorage.getItem(ORDER) || '[]');
    }

    public clear() {
        window.sessionStorage.removeItem(AMOUNT);
        window.sessionStorage.removeItem(ORDER);
    }

    public storeAddress(address: AddressResponse) {
        window.sessionStorage.removeItem(ADDRESS);
        window.sessionStorage.setItem(ADDRESS, JSON.stringify(address));
    }

    public getAddress(address: AddressResponse): AddressResponse {
        return JSON.parse(window.sessionStorage.getItem(ADDRESS));
    }
}
