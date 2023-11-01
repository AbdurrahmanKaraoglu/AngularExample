// album.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAlbums(userId: number) {
    return this.http.get<any[]>(`${this.apiUrl}/users/${userId}/albums`);
  }

  getPhotos(albumId: number) {
    return this.http.get<any[]>(`${this.apiUrl}/albums/${albumId}/photos`);
  }
}
