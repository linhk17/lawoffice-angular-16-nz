import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeAppointmentService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  prefixApi: String = '/type-appointment';
  constructor(private httpClient: HttpClient) { }

  public getAllType(): Observable<any>{
    return this.httpClient.get<any>(
      environment['apiUrl'] + this.prefixApi + '/'
    )
  }
}
