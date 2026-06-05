import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tema } from '../Tema';

/**
 * Servicio Angular para el temas-service.
 *
 * Base URL confirmada en:
 *   - TemaController.java  → @RequestMapping("/api/${api.version}/temas-service")
 *   - application.properties → api.version=v1, server.port=8080
 *   - compose.yml          → ports: "8080:8080"
 *
 * Endpoint completo: http://localhost:8080/api/v1/temas-service/temas
 */
@Injectable({
  providedIn: 'root',
})
export class TemaService {
  private readonly baseUrl = 'http://localhost:8080/api/v1/temas-service/temas';

  constructor(private http: HttpClient) {}

  /** GET /temas/todos — lista completa sin paginación */
  getTemas(): Observable<Tema[]> {
    return this.http.get<Tema[]>(`${this.baseUrl}/todos`);
  }

  /** GET /temas/{id} — un tema por id */
  getTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`${this.baseUrl}/${id}`);
  }

  /** POST /temas — crear nuevo tema */
  createTema(tema: Tema): Observable<Tema> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Tema>(this.baseUrl, tema, { headers });
  }

  /** PUT /temas/{id} — actualizar tema existente */
  updateTema(tema: Tema): Observable<Tema> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Tema>(`${this.baseUrl}/${tema.id}`, tema, { headers });
  }

  /** DELETE /temas/{id} — eliminar tema */
  deleteTema(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
