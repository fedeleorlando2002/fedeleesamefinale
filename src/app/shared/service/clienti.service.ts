import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { BaseService } from './base-service.service';
import { Cliente } from '../interfaces/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClientiService extends BaseService<Cliente> {

  public override section: string = '/clienti'; 

  constructor(http: HttpClient) {
    super(http);
  }
}
