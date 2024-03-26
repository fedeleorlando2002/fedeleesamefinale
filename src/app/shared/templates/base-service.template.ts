import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBaseService } from './base-service.interface';

export class BaseService implements IBaseService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  url: string;

  constructor(protected http: HttpClient, protected section: string, apiUrl: string) {
    this.url = apiUrl;
  }

  get path(): string {
    return `${this.url}/${this.section}`;
  }

  public get_single(_id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${this.section}/${_id}`);
  }

  public get(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/${this.section}`);
  }

  public post(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/${this.section}`, data, this.httpOptions);
  }

  public put(_id: string | undefined, data: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${this.section}/${_id}`, data);
  }

  public delete(_id: string): Observable<any> {
    return this.http.delete(`${this.url}/${this.section}/${_id}`);
  }
}


