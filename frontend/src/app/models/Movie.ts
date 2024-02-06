export interface Movie {
  id: number;
  title: string;
  year?: number;
  score?: number;
  metaScore?: number;
  genre?: string;
  vote?: number;
  director?: string;
  runtime?: number;
  revenue?: number;
  description: string;
  imageUrl: string;
}
