import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiUrl;

  constructor(private _http: HttpClient) { }
  get(url: string) {
    return this.request(url, 'GET');
  };
  put(url: string, body: any) {
    return this.request(url, 'PUT', body);
  }

  request(url: string, method: string, body?: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const requestOptions = {
      method: method,
      url: `${this.baseUrl}/${url}`,
      headers: headers
    }
    if (body) {
      requestOptions['body'] = body;
    }
    const req = new HttpRequest(method, `${this.baseUrl}/${url}`, requestOptions);
    return this._http.request(req);
  }
}
