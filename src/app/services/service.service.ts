import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  prefixApi: String = '/service';
  constructor(private httpClient: HttpClient) { }

  public getAllService(): Observable<any>{
    return this.httpClient.get<any>(
      environment['apiUrl'] + this.prefixApi + '/'
    )
  }

  public getByType(id: string): Observable<any>{
    return this.httpClient.get<any>(
      environment['apiUrl'] + this.prefixApi + '/findByType/' + id
    )
  }
}
