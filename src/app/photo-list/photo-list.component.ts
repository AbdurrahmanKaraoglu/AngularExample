// photo-list.component.ts
import { Component, Input } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent {
  @Input() albumId!: number | null;
  photos: any[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnChanges() {
    if (this.albumId) {
      this.loadPhotos(this.albumId);
    }
  }

  loadPhotos(albumId: number) {
    this.albumService.getPhotos(albumId).subscribe((data: any[]) => {
      this.photos = data;
    });
  }
}
