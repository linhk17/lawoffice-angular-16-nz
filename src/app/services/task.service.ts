import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  prefixApi: String = '/task';
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any>{
    return this.httpClient.get<any>(
      environment['apiUrl'] + this.prefixApi + '/'
    )
  }
  public getById(id: string): Observable<any>{
    return this.httpClient.get<any>(
      environment['apiUrl'] + this.prefixApi + '/' + id
    )
  }
  public create(data: any): Observable<any>{
    return this.httpClient.post<any>(
      environment['apiUrl'] + this.prefixApi + '/', data
    )
  }

  public update(id: string, data: any): Observable<any>{
    return this.httpClient.patch<any>(
      environment['apiUrl'] + this.prefixApi + '/' + id, data
    )
  }

  public getByMatter(id: string): Observable<any>{
    return this.httpClient.post<any>(
      environment['apiUrl'] + this.prefixApi + '/findByMatter/', {id: id}
    )
  }

  public getByTaskMaster(id: string): Observable<any>{
    console.log(id);
    
    return this.httpClient.post<any>(
      environment['apiUrl'] + this.prefixApi + '/findByStaffPhanCong/', {id: id}
    )
  }
}
