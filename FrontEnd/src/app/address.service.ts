import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AddressResponse } from './address-response';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class AddressService {

    private getAddressInfo = 'http://localhost:8090/address';

    constructor(private http: HttpClient) {
    }

    getMyAddresses(userId: string): Observable<AddressResponse[]> {
        return this.http.get<AddressResponse[]>(`${this.getAddressInfo}`, httpOptions);
    }
}
