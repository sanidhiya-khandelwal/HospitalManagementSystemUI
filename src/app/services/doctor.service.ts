import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'https://localhost:7028/api/Doctors'; // Your API URL
  
  constructor(private http: HttpClient) { }

  getDoctors(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
