import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from '../utils/endpoints';
//import { EstudiantesService } from './estudiantes.service';

@Injectable({
  providedIn: 'root'
  })
  export class EstudiantesService {
    private readonly http = inject(HttpClient);
    constructor() { }
    obtenerEstudiantes(): Observable<any>{
      return this.http.get(endpoints.obtenerEstudiantes);
    }
  }

/*describe('EstudiantesService', () => {
  let service: EstudiantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudiantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
}); */
