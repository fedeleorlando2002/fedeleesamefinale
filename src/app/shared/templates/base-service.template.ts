import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private baseUrl = 'http://127.0.0.1:5000'; // Sostituisci con l'URL del tuo server Python

  constructor(protected http: HttpClient) {
}


}
