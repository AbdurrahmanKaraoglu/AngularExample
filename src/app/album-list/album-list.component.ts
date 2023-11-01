// album-list.component.ts
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
  @Input() userId: number | null = null;
  albums: any[] = [];
  selectedAlbumId: number | null = 1; // Varsayılan bir değer atayın veya null olarak bırakın.

  constructor(private albumService: AlbumService) {}

  // userId yi emitden alıp loadAlbums() çağırın
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['userId']) {
      this.loadAlbums();
    }
  }


  ngOnInit() {
    if (this.userId) {
      this.loadAlbums();
    }
  }

  loadAlbums() {
    console.log('Loading albums for user: ', this.userId);
    if (this.userId) {
      this.albumService.getAlbums(this.userId).subscribe((data: any[]) => {
        this.albums = data;
      });
    }
  }

  selectAlbum(albumId: number) {
    console.log('Album selected: ', albumId);
    this.selectedAlbumId = albumId;
 
  }
  loadPhotos(albumId: number) {
    this.selectedAlbumId = albumId;
  }
}
