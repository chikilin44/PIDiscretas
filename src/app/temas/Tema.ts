
export class Tema {
  id?: number;
  titulo: string = '';
  contenido: string = '';
  calculadoraUrl?: string | null = null;
  videoUrls?: string[] | null = null;
  imagenUrls?: string[] | null = null;
  materialApoyoUrls?: string[] | null = null;
  moduloId!: number;
}

