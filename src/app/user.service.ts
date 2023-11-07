import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER:User[]=[];

    private apiUrl = 'http://localhost:44312/api/'; 

    constructor(private http: HttpClient) { }
  
    getUser(): Observable<any> {
      return this.http.get<any>(this.apiUrl + 'user', {  withCredentials: true});   
    }
  }


