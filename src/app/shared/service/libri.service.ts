import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';
import { Libro } from '../interfaces/libro.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LibriService extends BaseService<Libro> {
  
  override section: string = '/libri';

  constructor(http: HttpClient) {
    super(http);
  }
}

