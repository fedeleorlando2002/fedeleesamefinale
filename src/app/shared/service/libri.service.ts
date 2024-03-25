import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BaseService } from '../templates/base-service.template';
import { Libro } from '../interfaces/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibriService extends BaseService {

  // constructor(http: HttpClient) { 
  //   super(http, "/libri");
  // }
}

