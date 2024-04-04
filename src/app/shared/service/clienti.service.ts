// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from "@angular/common/http";
// import { BaseService } from './base-service.service';
// import { Cliente } from '../interfaces/cliente.model';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

// export class ClientiService extends BaseService<Cliente> {

//   override section: string = '/clienti';

//   constructor(http: HttpClient) {
//     super(http);
//   }

//   get(queryParams?: any): Observable<Cliente[]> {
//     let params = new HttpParams();
//     if (queryParams) {
//       Object.keys(queryParams).forEach((key) => {
//         params = params.append(key, queryParams[key]);
//       });
//     }
//     return this.http.get<Cliente[]>("/clienti", { params: params });
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { BaseService } from './base-service.service';
import { Cliente } from '../interfaces/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientiService extends BaseService<Cliente> {

  public override section: string = '/clienti'; // Ensure it's public if used outside the class

  constructor(http: HttpClient) {
    super(http);
  }
}
