import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { District, Province } from '../shared/models/province.interface';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getProvinces(): Observable<Province[]>{
    return this.httpClient.get<Province[]>('https://provinces.open-api.vn/api/')
  }
  getDistricts(provinceCode: string): Observable<Province>{
    return this.httpClient.get<Province>
    (`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
  }
}
