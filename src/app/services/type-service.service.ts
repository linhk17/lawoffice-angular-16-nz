import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeService } from '../shared/models/type-service.interface';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeServiceService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  prefixApi: String = '/type-service';
  constructor(private httpClient: HttpClient) { }

  public getAllType(): Observable<any>{
    return this.httpClient.get<any>(
      environment['apiUrl'] + this.prefixApi + '/'
    )
  }
}
