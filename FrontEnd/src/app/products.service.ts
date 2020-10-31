import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductResponse } from './product-response';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private getAllProducts = 'http://localhost:8090/produit';
    private searchproduct = 'http://localhost:8090/produit/search/';

    constructor(private http: HttpClient) {
    }

    getAllProduct(): Observable<ProductResponse[]> {
        return this.http.get<ProductResponse[]>(this.getAllProducts, httpOptions);
    }

    searchProduct(search: string): Observable<ProductResponse[]> {
        return this.http.get<ProductResponse[]>(`${this.searchproduct}${search}`, httpOptions);
    }
}
