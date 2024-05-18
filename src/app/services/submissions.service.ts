import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cus_special_request_sub } from '../models/cus_special_request_sub';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {

  constructor(
    private http: HttpClient,
  ) { }

  getData() {
    return this.http.get<Cus_special_request_sub[]>(environment.urlRequest);
  }
}
