import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class StepService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  prefixApi: String = '/step';
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any>{
    return this.httpClient.get<any>(
      environment['apiUrl'] + this.prefixApi + '/'
    )
  }
  public getByIdService(id: any): Observable<any>{
    console.log(id);
    
    return this.httpClient.get<any>(
      environment['apiUrl'] + this.prefixApi + '/findByIdService/' + id
    )
  }
}
