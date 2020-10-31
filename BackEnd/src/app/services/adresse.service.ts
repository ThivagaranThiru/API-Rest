import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adresse } from '../model/adresse-model';
import { User } from '../model/user-model';

const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': '*'})
};

@Injectable({
  providedIn: 'root'
})

export class AdresseService {

  private adresseList = 'http://localhost:8090/address';

  constructor(private http: HttpClient) { }

  getAdresseBoard(): Observable<Adresse[]> {
    return this.http.get<Adresse[]>(this.adresseList, httpOptions);
  }

  getAdresseById(id: number): Observable<Adresse> {
    return this.http.get<Adresse>(this.adresseList + '/' + id, httpOptions);
  }

  createAdresse(adresse: Adresse): Observable<Adresse> {
    return this.http.post<Adresse>(this.adresseList, adresse, httpOptions);
  }

  updateAdresse(adresse: Adresse): Observable<Adresse> {
    return this.http.put<Adresse>(this.adresseList + '/' + adresse.id, adresse, httpOptions);
  }

  deleteAdresse(id: number): Observable<any> {
    return this.http.delete<any>(this.adresseList + '/' + id, httpOptions);
  }

  deleteAdresseByUser(id: number): Observable<any> {
    return this.http.delete<any>(this.adresseList + '/deleteByUser/' + id, httpOptions);
  }
}
