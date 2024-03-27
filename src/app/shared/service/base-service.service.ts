import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
// BaseService serve per definire i metodi comuni a tutti i servizi che effettuano chiamate al backend
export class BaseService<T> {
  section: string = '';

  constructor(protected http: HttpClient) {}

  // GET LISTA
  get(): Observable<Array<T>> {
    return this.http.get<T[]>(`${environment.apiBaseUrl}${this.section}`);
  }

  // GET SINGOLO
  getById(id: string): Observable<T> {
    return this.http.get<T>(`${environment.apiBaseUrl}${this.section}/${id}`);
  }

  // POST
  post<T>(data: T): Observable<T> {
    return this.http.post<T>(`${environment.apiBaseUrl}${this.section}`, data);
  }

  // PUT
  put<T>(id: string | undefined, data: T): Observable<T> {
    return this.http.put<T>(`${environment.apiBaseUrl}${this.section}/${id}`,data);
  }

  // DELETE
  delete<T>(id: string | undefined): Observable<T> {
    return this.http.delete<T>(
      `${environment.apiBaseUrl}${this.section}/${id}`
    );
  }
}
