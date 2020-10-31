import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserInfoResponse } from './user-info-response';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class UserInfoService {

    private getSelfInfo = 'http://localhost:8090/user/';

    constructor(private http: HttpClient) {
    }

    getInfo(userId: string): Observable<UserInfoResponse> {
        return this.http.get<UserInfoResponse>(`${this.getSelfInfo}${userId}`, httpOptions);
    }
}
