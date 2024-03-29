import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BaseService } from './base-service.service';
import { Cliente } from '../interfaces/cliente.mdel';
@Injectable({
  providedIn: 'root'
})
export class ClientiService extends BaseService<Cliente> {

  override section: string = '/clienti';

  constructor(http: HttpClient) {
    super(http);
  }
}
