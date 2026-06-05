import { Component, OnInit } from '@angular/core';
import { Tema } from './Tema';
import { TemaService } from './services/tema.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-temas',
  standalone: false,
  templateUrl: './temas.html',
  styleUrl: './temas.css',
})
export class Temas implements OnInit {
  temas: Tema[] = [];
  cargando = false;

  readonly nombreModulo: Record<number, string> = {
    1: 'Fundamentos',
    2: 'Conteo',
    3: 'Criptografía',
  };

  constructor(private temaService: TemaService) {}

  ngOnInit(): void {
    this.cargarTemas();
  }

  // ── READ ──────────────────────────────────────────────────────────────────

  cargarTemas(): void {
    this.cargando = true;
    this.temaService.getTemas().subscribe({
      next: (data) => {
        this.temas = data;
        this.cargando = false;
      },
      error: (err) => {
        this.cargando = false;
        Swal.fire(
          'Error de conexión',
          `No se pudieron cargar los temas. ¿Está corriendo el servidor?\n\n${err.message}`,
          'error',
        );
      },
    });
  }

  // ── CREATE ────────────────────────────────────────────────────────────────

  agregarTema(): void {
    Swal.fire({
      title: 'Nuevo tema',
      html: `
        <input  id="t-titulo"    class="swal2-input"    placeholder="Título *" />
        <textarea id="t-contenido" class="swal2-textarea" placeholder="Contenido *"></textarea>
        <input  id="t-calc"      class="swal2-input"    placeholder="URL calculadora (opcional)" />
        <select id="t-modulo"    class="swal2-input">
          <option value="">— Selecciona módulo —</option>
          <option value="1">Módulo 1 — Fundamentos</option>
          <option value="2">Módulo 2 — Conteo</option>
          <option value="3">Módulo 3 — Criptografía</option>
        </select>
      `,
      showCancelButton: true,
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#6c3ce1',
      cancelButtonColor: '#6b5c99',
      preConfirm: () => {
        const titulo = (document.getElementById('t-titulo') as HTMLInputElement).value.trim();
        const contenido = (
          document.getElementById('t-contenido') as HTMLTextAreaElement
        ).value.trim();
        const calcUrl = (document.getElementById('t-calc') as HTMLInputElement).value.trim();
        const moduloId = Number((document.getElementById('t-modulo') as HTMLSelectElement).value);

        if (!titulo) {
          Swal.showValidationMessage('El título es obligatorio');
          return false;
        }
        if (!contenido) {
          Swal.showValidationMessage('El contenido es obligatorio');
          return false;
        }
        if (!moduloId) {
          Swal.showValidationMessage('Selecciona un módulo');
          return false;
        }

        // ⚠️ CLAVE: arrays como null (no []) — Hibernate no intenta insertar
        // filas vacías en tema_videos / tema_imagenes / tema_materiales
        const tema = new Tema();
        tema.titulo = titulo;
        tema.contenido = contenido;
        tema.calculadoraUrl = calcUrl || null;
        tema.videoUrls = null;
        tema.imagenUrls = null;
        tema.materialApoyoUrls = null;
        tema.moduloId = moduloId;
        return tema;
      },
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        this.temaService.createTema(result.value).subscribe({
          next: () => {
            this.cargarTemas();
            Swal.fire('¡Creado!', 'El tema fue creado correctamente.', 'success');
          },
          error: (err) => {
            // Muestra el detalle real del error del backend
            const msg = err.error?.message || err.error || err.message || 'Error desconocido';
            Swal.fire('Error al crear', `El servidor respondió:\n\n${msg}`, 'error');
          },
        });
      }
    });
  }

  // ── UPDATE ────────────────────────────────────────────────────────────────

  editarTema(tema: Tema): void {
    Swal.fire({
      title: 'Editar tema',
      html: `
        <input  id="t-titulo"    class="swal2-input"    placeholder="Título *"    value="${this.esc(tema.titulo)}" />
        <textarea id="t-contenido" class="swal2-textarea" placeholder="Contenido *">${this.esc(tema.contenido)}</textarea>
        <input  id="t-calc"      class="swal2-input"    placeholder="URL calculadora" value="${tema.calculadoraUrl ?? ''}" />
        <select id="t-modulo"    class="swal2-input">
          <option value="1" ${tema.moduloId === 1 ? 'selected' : ''}>Módulo 1 — Fundamentos</option>
          <option value="2" ${tema.moduloId === 2 ? 'selected' : ''}>Módulo 2 — Conteo</option>
          <option value="3" ${tema.moduloId === 3 ? 'selected' : ''}>Módulo 3 — Criptografía</option>
        </select>
      `,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#6c3ce1',
      cancelButtonColor: '#6b5c99',
      preConfirm: () => {
        const titulo = (document.getElementById('t-titulo') as HTMLInputElement).value.trim();
        const contenido = (
          document.getElementById('t-contenido') as HTMLTextAreaElement
        ).value.trim();
        const calcUrl = (document.getElementById('t-calc') as HTMLInputElement).value.trim();
        const moduloId = Number((document.getElementById('t-modulo') as HTMLSelectElement).value);

        if (!titulo) {
          Swal.showValidationMessage('El título es obligatorio');
          return false;
        }
        if (!contenido) {
          Swal.showValidationMessage('El contenido es obligatorio');
          return false;
        }

        tema.titulo = titulo;
        tema.contenido = contenido;
        tema.calculadoraUrl = calcUrl || null;
        tema.moduloId = moduloId;
        // Preserva los arrays existentes — no los sobreescribas con null al editar
        return tema;
      },
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        this.temaService.updateTema(result.value).subscribe({
          next: () => {
            this.cargarTemas();
            Swal.fire('Actualizado', 'El tema fue actualizado.', 'success');
          },
          error: (err) => {
            const msg = err.error?.message || err.error || err.message || 'Error desconocido';
            Swal.fire('Error al actualizar', `El servidor respondió:\n\n${msg}`, 'error');
          },
        });
      }
    });
  }

  // ── DELETE ────────────────────────────────────────────────────────────────

  eliminarTema(id: number): void {
    Swal.fire({
      title: '¿Eliminar tema?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e8366a',
      cancelButtonColor: '#6b5c99',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.temaService.deleteTema(id).subscribe({
          next: () => {
            this.cargarTemas();
            Swal.fire('Eliminado', 'El tema fue eliminado.', 'success');
          },
          error: (err) => {
            const msg = err.error?.message || err.error || err.message || 'Error desconocido';
            Swal.fire('Error al eliminar', `El servidor respondió:\n\n${msg}`, 'error');
          },
        });
      }
    });
  }

  // ── HELPERS ───────────────────────────────────────────────────────────────

  modulo(id: number): string {
    return this.nombreModulo[id] ?? `Módulo ${id}`;
  }

  private esc(str: string): string {
    return (str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  temasPorModulo(id: number): Tema[] {
    return this.temas.filter((t) => t.moduloId === id);
  }

  get modulos(): number[] {
    return [1, 2, 3];
  }
}
